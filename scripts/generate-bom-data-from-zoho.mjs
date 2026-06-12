import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import {
  getCompositeItemDetail,
  listAllCompositeItemHeaders,
} from "../lib/zoho/composite-items.ts";

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function numberValue(value) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function isCandidateCompositeItem(item) {
  const status = normalize(item.status);
  const sku = String(item.sku ?? "").trim();

  if (!sku) return false;
  if (status !== "active") return false;

  return true;
}

const headers = await listAllCompositeItemHeaders();

console.log(`Fetched ${headers.length} composite item headers.`);

const candidates = headers.filter(isCandidateCompositeItem);

console.log(`Candidate active composite items: ${candidates.length}`);

const bomLines = [];

for (let i = 0; i < candidates.length; i += 1) {
  const header = candidates[i];

  if ((i + 1) % 25 === 0 || i === 0) {
    console.log(
      `Fetching composite detail ${i + 1}/${candidates.length}: ${header.sku}`
    );
  }

  const detail = await getCompositeItemDetail(header.composite_item_id);

  const parentSku = String(detail.sku ?? "").trim();

  if (!parentSku) continue;

  const components =
    detail.composite_component_items ??
    detail.mapped_items ??
    [];

  for (const component of components) {
    const childSku = String(component.sku ?? "").trim();
    const qtyPer = numberValue(component.quantity);

    if (!childSku) continue;
    if (qtyPer <= 0) continue;

    bomLines.push({
      parentSku,
      childSku,
      qtyPer,
    });
  }
}

bomLines.sort((a, b) => {
  const parentCompare = a.parentSku.localeCompare(b.parentSku);
  if (parentCompare !== 0) return parentCompare;
  return a.childSku.localeCompare(b.childSku);
});

const output = `// Auto-generated from Zoho Books API.
// Do not edit manually.

export type BomLine = {
  parentSku: string;
  childSku: string;
  qtyPer: number;
};

const bomLines: BomLine[] = ${JSON.stringify(bomLines, null, 2)};

export async function getBomLines(): Promise<BomLine[]> {
  return bomLines;
}

export async function getBomLinesByParentSku(
  parentSku: string
): Promise<BomLine[]> {
  return bomLines.filter((line) => line.parentSku === parentSku);
}

export async function getBomLinesByChildSku(
  childSku: string
): Promise<BomLine[]> {
  return bomLines.filter((line) => line.childSku === childSku);
}
`;

writeFileSync("lib/bom-data.ts", output);

console.log(`Wrote ${bomLines.length} BOM lines to lib/bom-data.ts`);