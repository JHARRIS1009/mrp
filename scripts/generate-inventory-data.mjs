import fs from "fs";

const inputPath = "data/items.csv";
const outputPath = "lib/inventory-data.ts";

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

const inventoryItems = records
  .filter((item) => item.SKU?.trim())
  .filter((item) => item.Status === "Active")
  .filter((item) => item["Track Inventory"] === "true")
  .map((item) => ({
    sku: item.SKU.trim(),
    description: item["Item Name"]?.trim() || item.SKU.trim(),
    onHand: parseNumber(item["Stock On Hand"]),
    incoming: 0,
    allocated: 0,
  }))
  .sort((a, b) => a.sku.localeCompare(b.sku));

const output = `export type InventoryItem = {
  sku: string;
  description: string;
  onHand: number;
  incoming: number;
  allocated: number;
};

export async function getInventoryItems(): Promise<InventoryItem[]> {
  return ${JSON.stringify(inventoryItems, null, 2)};
}
`;

fs.writeFileSync(outputPath, output);

console.log("Generated " + outputPath + " with " + inventoryItems.length + " inventory items.");