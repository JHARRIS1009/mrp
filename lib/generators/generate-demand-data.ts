import { getInventoryItems, type InventoryItem } from "@/lib/data/inventory";
import { replaceDemandLines, type DemandLine } from "@/lib/data/demand";
import { getDemandFromZoho } from "@/lib/mrp/demand-from-zoho";
import { recordSyncRun } from "@/lib/sync/runs";

export async function generateDemandData(options?: {
  inventoryItems?: InventoryItem[];
}) {
  const inventoryItems = options?.inventoryItems ?? (await getInventoryItems());

  const inventoryTrackedSkus = new Set(
    inventoryItems.map((item) => item.sku).filter(Boolean)
  );

  const dateAfter = process.env.ZOHO_DEMAND_DATE_AFTER || "2025-01-01";

  console.log(`[GENERATE] Demand date_after: ${dateAfter}`);
  console.log(`[GENERATE] Inventory SKUs: ${inventoryTrackedSkus.size}`);

  const demand: DemandLine[] = await getDemandFromZoho({
    inventoryTrackedSkus,
    dateAfter,
  });

  await replaceDemandLines(demand);
  await recordSyncRun({
    syncType: "demand",
    records: demand.length,
    status: "success",
    message: "Wrote demand lines to Supabase.",
  });

  console.log(`[GENERATE] Wrote ${demand.length} demand lines to Supabase.`);

  return {
    records: demand.length,
  };
}
