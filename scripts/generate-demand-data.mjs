import fs from "fs";

const salesOrdersPath = "data/Sales_Orders.csv";
const itemsPath = "data/Items.csv";
const outputPath = "lib/demand-data.ts";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (value || row.length > 0) {
        row.push(value);
        rows.push(row);
        row = [];
        value = "";
      }

      if (char === "\r" && next === "\n") {
        i++;
      }
    } else {
      value += char;
    }
  }

  if (value || row.length > 0) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function rowsToRecords(rows) {
  const headers = rows[0];
  const dataRows = rows.slice(1);

  return dataRows.map((row) =>
    Object.fromEntries(
      headers.map((header, index) => [header, row[index] ?? ""])
    )
  );
}

function parseNumber(value) {
  const number = Number(String(value ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function isTrue(value) {
  return String(value ?? "").trim().toLowerCase() === "true";
}

const itemsCsv = fs.readFileSync(itemsPath, "utf8");
const itemRecords = rowsToRecords(parseCsv(itemsCsv));

const inventorySkuSet = new Set(
  itemRecords
    .filter((item) => item.SKU?.trim())
    .filter((item) => isTrue(item["Track Inventory"]))
    .map((item) => item.SKU.trim())
);

const salesOrdersCsv = fs.readFileSync(salesOrdersPath, "utf8");
const salesOrderRecords = rowsToRecords(parseCsv(salesOrdersCsv));

const demandItems = salesOrderRecords
  .filter((item) => item["SalesOrder Number"]?.trim())
  .filter((item) => item.SKU?.trim())
  .filter((item) => {
    const status = String(item.Status ?? "").trim().toLowerCase();
    const customStatus = String(item["Custom Status"] ?? "").trim().toLowerCase();

    return status !== "void" && customStatus !== "void";
  })
  .filter((item) => inventorySkuSet.has(item.SKU.trim()))
  .filter((item) => {
    const hasDropShipRecipient =
      item["Deliver To Customer"]?.trim() ||
      item["Recipient Address"]?.trim() ||
      item["Recipient City"]?.trim() ||
      item["Recipient State"]?.trim() ||
      item["Recipient Country"]?.trim() ||
      item["Recipient Postal Code"]?.trim();

    const containsDFP = Object.values(item).some((value) =>
      String(value).toUpperCase().includes("DFP")
    );

    return !hasDropShipRecipient && !containsDFP;
  })
  .map((item) => {
    const quantityOrdered = parseNumber(item.QuantityOrdered);
    const quantityCancelled = parseNumber(item.QuantityCancelled);
    const quantityPacked = parseNumber(item.QuantityPacked);

    const quantity = Math.max(
      quantityOrdered - quantityCancelled - quantityPacked,
      0
    );

    return {
      orderNumber: item["SalesOrder Number"].trim(),
      customerName: item["Customer Name"]?.trim() || "Unknown Customer",
      sku: item.SKU.trim(),
      quantity,
      dueDate:
        item["Expected Shipment Date"]?.trim() ||
        item["Order Date"]?.trim() ||
        "",
    };
  })
  .filter((item) => item.quantity > 0)
  .sort((a, b) => {
    const orderCompare = a.orderNumber.localeCompare(b.orderNumber);
    if (orderCompare !== 0) return orderCompare;

    return a.sku.localeCompare(b.sku);
  });

const output = `export type DemandItem = {
  orderNumber: string;
  customerName: string;
  sku: string;
  quantity: number;
  dueDate: string;
};

export async function getDemandItems(): Promise<DemandItem[]> {
  return ${JSON.stringify(demandItems, null, 2)};
}

export async function getDemandItemsByOrderNumber(orderNumber: string) {
  const demandItems = await getDemandItems();

  return demandItems.filter((item) => item.orderNumber === orderNumber);
}
`;

fs.writeFileSync(outputPath, output);

console.log(
  "Generated " + outputPath + " with " + demandItems.length + " demand lines."
);