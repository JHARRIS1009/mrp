import { getBomLines } from "@/lib/data/bom";
import { getInventoryItems } from "@/lib/data/inventory";

export async function calculateCanBuild() {
  const inventoryItems = await getInventoryItems();
  const bomLines = await getBomLines();

  const parentSkus = [...new Set(bomLines.map((line) => line.parentSku))];

  const results = parentSkus.map((parentSku) => {
    const parent = inventoryItems.find((item) => item.sku === parentSku);
    const parentBomLines = bomLines.filter((line) => line.parentSku === parentSku);

    const componentResults = parentBomLines.map((line) => {
      const child = inventoryItems.find((item) => item.sku === line.childSku);
      const childAvailable = child ? child.onHand - child.allocated : 0;
      const buildableFromThisComponent = Math.floor(childAvailable / line.qtyPer);

      return {
        childSku: line.childSku,
        qtyPer: line.qtyPer,
        childAvailable,
        buildableFromThisComponent,
      };
    });

    const maxAdditionalBuild =
      componentResults.length > 0
        ? Math.min(...componentResults.map((component) => component.buildableFromThisComponent))
        : 0;

    const parentOnHand = parent ? parent.onHand : 0;
    const totalAvailable = parentOnHand + maxAdditionalBuild;

    const limitingComponent = componentResults.find(
      (component) => component.buildableFromThisComponent === maxAdditionalBuild
    );

    return {
      sku: parentSku,
      parentOnHand,
      maxAdditionalBuild,
      totalAvailable,
      limitingComponentSku: limitingComponent?.childSku ?? "N/A",
    };
  });

  return results;
}
