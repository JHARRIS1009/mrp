import { getInventoryItems } from "@/lib/inventory-data";
import { calculateShortageTrace } from "@/lib/mrp";
import { getPurchaseOrderLinesBySku } from "@/lib/purchase-orders-data";
import { getDemandItems } from "@/lib/demand-data";

export type ProjectedInventoryEvent = {
  date: string;
  type: "Demand" | "Purchase Order";
  reference: string;
  quantityChange: number;
  projectedAvailable: number;
};

function parseDate(date: string): number {
  return new Date(date).getTime();
}

export async function calculateProjectedInventory(
  sku: string
): Promise<ProjectedInventoryEvent[]> {
  const inventoryItems = await getInventoryItems();
  const traces = await calculateShortageTrace(sku);
  const demandItems = await getDemandItems();
  const purchaseOrderLines = await getPurchaseOrderLinesBySku(sku);

  const inventoryItem = inventoryItems.find((item) => item.sku === sku);

  let runningAvailable = inventoryItem
    ? inventoryItem.onHand - inventoryItem.allocated
    : 0;

  const directDemandEvents = demandItems
    .filter((item) => item.sku === sku)
    .map((item) => ({
        date: item.dueDate,
        type: "Demand" as const,
        reference: item.orderNumber,
        quantityChange: -item.quantity,
  }));

const tracedDemandEvents = traces.map((trace) => ({
  date: trace.dueDate,
  type: "Demand" as const,
  reference: trace.orderNumber,
  quantityChange: -trace.requiredQuantity,
}));

const demandEvents =
  directDemandEvents.length > 0 ? directDemandEvents : tracedDemandEvents;

  const purchaseOrderEvents = purchaseOrderLines.map((line) => ({
    date: line.expectedDate,
    type: "Purchase Order" as const,
    reference: line.poNumber,
    quantityChange: line.quantity,
  }));

  const events = [...demandEvents, ...purchaseOrderEvents].sort(
    (a, b) => parseDate(a.date) - parseDate(b.date)
  );

  return events.map((event) => {
    runningAvailable += event.quantityChange;

    return {
      ...event,
      projectedAvailable: runningAvailable,
    };
  });
}