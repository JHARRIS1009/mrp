import { getBomLines } from "@/lib/bom-data";
import { getDemandItems } from "@/lib/demand-data";
import { getInventoryItems } from "@/lib/inventory-data";

export type ShortageResult = {
  sku: string;
  required: number;
  available: number;
  netRequired: number;
  shortage: number;
};

export async function calculateShortages(): Promise<ShortageResult[]> {
  const inventoryItems = await getInventoryItems();
  const bomLines = await getBomLines();
  const demandItems = await getDemandItems();

  const requirements = new Map<string, number>();
  const availableInventory = new Map<string, number>();

  for (const item of inventoryItems) {
    availableInventory.set(item.sku, item.onHand - item.allocated);
  }

  function addRequirement(sku: string, quantity: number) {
    const currentRequired = requirements.get(sku) ?? 0;
    requirements.set(sku, currentRequired + quantity);
  }

  function useAvailableInventory(sku: string, quantityNeeded: number): number {
    const available = availableInventory.get(sku) ?? 0;
    const quantityUsed = Math.min(available, quantityNeeded);
    const remainingAvailable = available - quantityUsed;

    availableInventory.set(sku, remainingAvailable);

    return quantityNeeded - quantityUsed;
  }

  function explodeDemand(sku: string, quantity: number) {
    addRequirement(sku, quantity);

    const netRequirement = useAvailableInventory(sku, quantity);

    if (netRequirement <= 0) {
      return;
    }

    const children = bomLines.filter((line) => line.parentSku === sku);

    for (const child of children) {
      const childRequired = netRequirement * child.qtyPer;
      explodeDemand(child.childSku, childRequired);
    }
  }

  for (const demand of demandItems) {
    explodeDemand(demand.sku, demand.quantity);
  }

  const results: ShortageResult[] = [];

  for (const [sku, required] of requirements) {
    const originalInventory = inventoryItems.find((item) => item.sku === sku);
    const originalAvailable = originalInventory
      ? originalInventory.onHand - originalInventory.allocated
      : 0;

    const remainingAvailable = availableInventory.get(sku) ?? 0;
    const availableUsed = originalAvailable - remainingAvailable;
    const netRequired = Math.max(required - originalAvailable, 0);
    const shortage = netRequired;

    results.push({
      sku,
      required,
      available: originalAvailable,
      netRequired,
      shortage,
    });
  }

  return results.sort((a, b) => a.sku.localeCompare(b.sku));
}