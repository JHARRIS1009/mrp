import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import { getInventoryItems } from "../lib/inventory-data.ts";
import { getDemandFromZoho } from "../lib/mrp/demand-from-zoho.ts";

const inventoryItems = await getInventoryItems();

const inventoryTrackedSkus = new Set(
  inventoryItems
    .map((item) => item.sku)
    .filter(Boolean)
);

const dateAfter = process.env.ZOHO_DEMAND_DATE_AFTER || "2025-01-01";

console.log(`Using demand date_after: ${dateAfter}`);
console.log(`Loaded ${inventoryTrackedSkus.size} inventory SKUs.`);

const demand = await getDemandFromZoho({
  inventoryTrackedSkus,
  dateAfter,
});

const output = `// Auto-generated from Zoho Books API.
// Do not edit manually.

export type DemandLine = {
  orderNumber: string;
  customerName: string;
  sku: string;
  description: string;
  quantityOpen: number;
  orderDate: string;
  dueDate: string;
};

const demandItems: DemandLine[] = ${JSON.stringify(demand, null, 2)};

export async function getDemandItems(): Promise<DemandLine[]> {
  return demandItems;
}

export async function getDemandItemsByOrderNumber(
  orderNumber: string
): Promise<DemandLine[]> {
  return demandItems.filter((item) => item.orderNumber === orderNumber);
}
`;

writeFileSync("lib/demand-data.ts", output);

console.log(`Wrote ${demand.length} demand lines to lib/demand-data.ts`);