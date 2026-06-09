import fs from "fs";

const purchaseOrdersPath = "data/Purchase_Orders.csv";
const itemsPath = "data/Items.csv";
const outputPath = "lib/purchase-orders-data.ts";

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

const purchaseOrdersCsv = fs.readFileSync(purchaseOrdersPath, "utf8");
const purchaseOrderRecords = rowsToRecords(parseCsv(purchaseOrdersCsv));

const purchaseOrderLines = purchaseOrderRecords
  .filter((item) => item["Purchase Order Number"]?.trim())
  .filter((item) => item.SKU?.trim())
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
    const quantityReceived = parseNumber(item.QuantityReceived);

    const quantity = Math.max(
      quantityOrdered - quantityCancelled - quantityReceived,
      0
    );

    return {
      poNumber: item["Purchase Order Number"].trim(),
      vendorName: item["Vendor Name"]?.trim() || "Unknown Vendor",
      sku: item.SKU.trim(),
      quantity,
      expectedDate:
        item["Expected Arrival Date"]?.trim() ||
        item["Delivery Date"]?.trim() ||
        item["Purchase Order Date"]?.trim() ||
        "",
    };
  })
  .filter((item) => item.quantity > 0)
  .sort((a, b) => {
    const poCompare = a.poNumber.localeCompare(b.poNumber);
    if (poCompare !== 0) return poCompare;

    return a.sku.localeCompare(b.sku);
  });

const output = `export type PurchaseOrderLine = {
  poNumber: string;
  vendorName: string;
  sku: string;
  quantity: number;
  expectedDate: string;
};

export async function getPurchaseOrderLines(): Promise<PurchaseOrderLine[]> {
  return ${JSON.stringify(purchaseOrderLines, null, 2)};
}

export async function getPurchaseOrderLinesByPoNumber(poNumber: string) {
  const purchaseOrderLines = await getPurchaseOrderLines();

  return purchaseOrderLines.filter((line) => line.poNumber === poNumber);
}

export async function getPurchaseOrderLinesBySku(sku: string) {
  const purchaseOrderLines = await getPurchaseOrderLines();

  return purchaseOrderLines.filter((line) => line.sku === sku);
}
`;

fs.writeFileSync(outputPath, output);

console.log(
  "Generated " +
    outputPath +
    " with " +
    purchaseOrderLines.length +
    " purchase order lines."
);