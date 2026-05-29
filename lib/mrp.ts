import { getBomLines } from "@/lib/bom-data";
import { getDemandItems } from "@/lib/demand-data";
import { getInventoryItems } from "@/lib/inventory-data";

export type ShortageResult = {
  sku: string;
  required: number;
  available: number;
  shortage: number;
};

export async function calculateShortages(): Promise<ShortageResult[]> {
  const inventoryItems = await getInventoryItems();
  const bomLines = await getBomLines();
  const demandItems = await getDemandItems();

  const requirements = new Map<string, number>();

  function explodeDemand(sku: string, quantity: number) {
    const children = bomLines.filter((line) => line.parentSku === sku);

    for (const child of children) {
      const required = quantity * child.qtyPer;

      const currentRequired = requirements.get(child.childSku) ?? 0;
      requirements.set(child.childSku, currentRequired + required);

      explodeDemand(child.childSku, required);
    }
  }

  for (const demand of demandItems) {
    explodeDemand(demand.sku, demand.quantity);
  }

  const results: ShortageResult[] = [];

  for (const [sku, required] of requirements) {
    const inventoryItem = inventoryItems.find((item) => item.sku === sku);
    const available = inventoryItem
      ? inventoryItem.onHand - inventoryItem.allocated
      : 0;

    const shortage = Math.max(required - available, 0);

    results.push({
      sku,
      required,
      available,
      shortage,
    });
  }

  return results.sort((a, b) => a.sku.localeCompare(b.sku));
}