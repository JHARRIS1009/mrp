import {
  replaceInventoryItems,
  type InventoryItem,
} from "@/lib/data/inventory";
import { recordSyncRun } from "@/lib/sync/runs";
import {
  listAllItems,
  listAllCompositeItemsAsInventoryItems,
} from "@/lib/zoho/items";

function numberValue(value: unknown) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function normalizeItem(item: any) {
  const sku = String(item.sku ?? "").trim();

  if (!sku) return null;
  if (item.track_inventory !== true) return null;
  if (String(item.status ?? "").toLowerCase() !== "active") return null;

  const onHand = numberValue(item.stock_on_hand);
  const available = numberValue(
    item.actual_available_stock ?? item.available_stock
  );

  const allocated = Math.max(onHand - available, 0);

  return {
    sku,
    description: item.name || item.item_name || item.description || "",
    onHand,
    incoming: 0,
    allocated,
  };
}

export async function generateInventoryData() {
  console.log("[GENERATE] Regenerating inventory data...");

  const regularItems = await listAllItems();
  const compositeItems = await listAllCompositeItemsAsInventoryItems();

  const bySku = new Map<string, InventoryItem>();

  for (const item of [...regularItems, ...compositeItems]) {
    const normalized = normalizeItem(item);
    if (!normalized) continue;

    bySku.set(normalized.sku, normalized);
  }

  const inventory = [...bySku.values()].sort((a, b) =>
    a.sku.localeCompare(b.sku)
  );

  await replaceInventoryItems(inventory);
  await recordSyncRun({
    syncType: "inventory",
    records: inventory.length,
    status: "success",
    message: "Wrote inventory items to Supabase.",
  });

  console.log(`[GENERATE] Wrote ${inventory.length} inventory items to Supabase.`);

  return {
    records: inventory.length,
    inventory,
  };
}
