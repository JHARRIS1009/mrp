import { getBomLines } from "@/lib/data/bom";
import { getInventoryItems } from "@/lib/data/inventory";

export async function calculateComponentCapacity() {
  const inventoryItems = await getInventoryItems();
  const bomLines = await getBomLines();

  return bomLines.map((line) => {
    const child = inventoryItems.find((item) => item.sku === line.childSku);
    const available = child ? child.onHand - child.allocated : 0;
    const canBuild = Math.floor(available / line.qtyPer);

    return {
      parentSku: line.parentSku,
      childSku: line.childSku,
      qtyPer: line.qtyPer,
      available,
      canBuild,
    };
  });
}
