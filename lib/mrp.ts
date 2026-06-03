import { getBomLines } from "@/lib/bom-data";
import { getDemandItems } from "@/lib/demand-data";
import { getInventoryItems } from "@/lib/inventory-data";
import { getPurchaseOrderLines } from "@/lib/purchase-orders-data";

export type RequirementTrace = {
    componentSku: string;
    orderNumber: string;
    customerName: string;
    dueDate: string;
    sourceSku: string;
    demandQuantity: number;
    netBuildQuantity: number;
    qtyPer: number;
    requiredQuantity: number;
    path: string[];
};

export type ShortageResult = {
  sku: string;
  required: number;
  available: number;
  incoming: number;
  projectedAvailable: number;
  netRequired: number;
  shortage: number;
  traces: RequirementTrace[];
};

export async function calculateShortages(): Promise<ShortageResult[]> {
  const inventoryItems = await getInventoryItems();
  const bomLines = await getBomLines();
  const demandItems = await getDemandItems();
  const purchaseOrderLines = await getPurchaseOrderLines();

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

  function explodeDemand(
    sku: string,
    quantity: number
  ) {

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

    const incoming = purchaseOrderLines
      .filter((line) => line.sku === sku)
      .reduce((sum, line) => sum + line.quantity, 0);

    const projectedAvailable = originalAvailable + incoming;

    const netRequired = Math.max(required - projectedAvailable, 0);
    const shortage = netRequired;

    results.push({
      sku,
      required,
      available: originalAvailable,
      incoming,
      projectedAvailable,
      netRequired,
      shortage,
      traces: [],
    });
  }

  return results.sort((a, b) => a.sku.localeCompare(b.sku));
}

export async function calculateShortageTrace(
  targetSku: string
): Promise<RequirementTrace[]> {
  const bomLines = await getBomLines();
  const demandItems = await getDemandItems();
  const inventoryItems = await getInventoryItems();

  const availableInventory = new Map<string, number>();

  for (const item of inventoryItems) {
    availableInventory.set(item.sku, item.onHand - item.allocated);
  }

  const traces: RequirementTrace[] = [];

  function useAvailableInventory(sku: string, quantityNeeded: number): number {
    const available = availableInventory.get(sku) ?? 0;
    const quantityUsed = Math.min(available, quantityNeeded);

    availableInventory.set(sku, available - quantityUsed);

    return quantityNeeded - quantityUsed;
  }

  function explodeDemand(
    sku: string,
    quantity: number,
    orderNumber: string,
    customerName: string,
    dueDate: string,
    sourceSku: string,
    demandQuantity: number,
    path: string[]
  ) {
    const netRequirement = useAvailableInventory(sku, quantity);

    if (netRequirement <= 0) {
      return;
    }

    const children = bomLines.filter((line) => line.parentSku === sku);

    for (const child of children) {
      const requiredQuantity = netRequirement * child.qtyPer;
      const childPath = [...path, child.childSku];

      if (child.childSku === targetSku) {
        traces.push({
          componentSku: child.childSku,
          orderNumber,
          customerName,
          dueDate,
          sourceSku,
          demandQuantity,
          netBuildQuantity: netRequirement,
          qtyPer: child.qtyPer,
          requiredQuantity,
          path: childPath,
        });
      }

      explodeDemand(
        child.childSku,
        requiredQuantity,
        orderNumber,
        customerName,
        dueDate,
        sourceSku,
        demandQuantity,
        childPath
      );
    }
  }

  for (const demand of demandItems) {
    explodeDemand(
      demand.sku,
      demand.quantity,
      demand.orderNumber,
      demand.customerName,
      demand.dueDate,
      demand.sku,
      demand.quantity,
      [demand.sku]
    );
  }

  return traces;
}