import fs from "fs";

const inputPath = "data/Sales_Orders.csv";
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

function parseNumber(value) {
  const number = Number(String(value ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

const csv = fs.readFileSync(inputPath, "utf8");
const rows = parseCsv(csv);

const headers = rows[0];
const dataRows = rows.slice(1);

const records = dataRows.map((row) =>
  Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""]))
);

const demandItems = records
  .filter((item) => item["SalesOrder Number"]?.trim())
  .filter((item) => item.SKU?.trim())
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

console.log("Generated " + outputPath + " with " + demandItems.length + " demand lines.");