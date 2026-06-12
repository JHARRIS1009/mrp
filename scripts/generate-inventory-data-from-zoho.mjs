import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import {
  listAllItems,
  listAllCompositeItemsAsInventoryItems,
} from "../lib/zoho/items.ts";

function numberValue(value) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function normalizeItem(item) {
  const sku = String(item.sku ?? "").trim();

  if (!sku) return null;
  if (item.track_inventory !== true) return null;
  if (String(item.status ?? "").toLowerCase() !== "active") return null;

  const onHand = numberValue(item.stock_on_hand);
  const available = numberValue(item.actual_available_stock ?? item.available_stock);
  const allocated = Math.max(onHand - available, 0);

  return {
    sku,
    description: item.name || item.item_name || item.description || "",
    onHand,
    incoming: 0,
    allocated,
  };
}

const regularItems = await listAllItems();
const compositeItems = await listAllCompositeItemsAsInventoryItems();

const bySku = new Map();

for (const item of [...regularItems, ...compositeItems]) {
  const normalized = normalizeItem(item);

  if (!normalized) continue;

  bySku.set(normalized.sku, normalized);
}

const inventory = [...bySku.values()].sort((a, b) =>
  a.sku.localeCompare(b.sku)
);

const output = `// Auto-generated from Zoho Books API.
// Do not edit manually.

export type InventoryItem = {
  sku: string;
  description: string;
  onHand: number;
  incoming: number;
  allocated: number;
};

const inventoryItems: InventoryItem[] = ${JSON.stringify(inventory, null, 2)};

export async function getInventoryItems(): Promise<InventoryItem[]> {
  return inventoryItems;
}

export async function getInventoryItemBySku(
  sku: string
): Promise<InventoryItem | undefined> {
  return inventoryItems.find((item) => item.sku === sku);
}
`;

writeFileSync("lib/inventory-data.ts", output);

console.log(`Wrote ${inventory.length} inventory items to lib/inventory-data.ts`);