import { calculateShortages } from "@/lib/mrp";
import { calculateProjectedInventory } from "@/lib/projected-inventory";

export type MrpException = {
    sku: string;
    type: "Current Shortage" | "Projected Shortage";
    currentShortage: number;
    lowestProjectedAvailable: number;
};

export async function calculateMrpExceptions(): Promise<MrpException[]> {
  const shortages = await calculateShortages();

  const exceptions: MrpException[] = [];

  for (const shortage of shortages) {
    const projectedEvents = await calculateProjectedInventory(shortage.sku);

    const projectedValues = projectedEvents.map(
      (event) => event.projectedAvailable
    );

    const lowestProjectedAvailable =
      projectedValues.length > 0
        ? Math.min(...projectedValues)
        : shortage.available;

    if (shortage.shortage > 0) {
      exceptions.push({
        sku: shortage.sku,
        type: "Current Shortage",
        currentShortage: shortage.shortage,
        lowestProjectedAvailable,
      });
    } else if (lowestProjectedAvailable < 0) {
      exceptions.push({
        sku: shortage.sku,
        type: "Projected Shortage",
        currentShortage: 0,
        lowestProjectedAvailable,
      });
    }
  }

  return exceptions.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "Current Shortage" ? -1 : 1;
    }

    return a.sku.localeCompare(b.sku);
  });
}