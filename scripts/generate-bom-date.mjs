import fs from "fs";

const inputPath = "data/Composite_Items.csv";
const outputPath = "lib/bom-data.ts";

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

const bomLines = records
  .filter((item) => item.SKU?.trim())
  .filter((item) => item["Mapped Item SKU"]?.trim())
  .map((item) => ({
    parentSku: item.SKU.trim(),
    childSku: item["Mapped Item SKU"].trim(),
    qtyPer: parseNumber(item["Mapped Quantity"]),
  }))
  .filter((line) => line.qtyPer > 0)
  .sort((a, b) => {
    const parentCompare = a.parentSku.localeCompare(b.parentSku);
    if (parentCompare !== 0) return parentCompare;

    return a.childSku.localeCompare(b.childSku);
  });

const output = `export type BomLine = {
  parentSku: string;
  childSku: string;
  qtyPer: number;
};

export async function getBomLines(): Promise<BomLine[]> {
  return ${JSON.stringify(bomLines, null, 2)};
}
`;

fs.writeFileSync(outputPath, output);

console.log("Generated " + outputPath + " with " + bomLines.length + " BOM lines.");