import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import { getInventoryItems } from "../lib/inventory-data.ts";
import { getSalesOrderDetail, listAllSalesOrderHeaders } from "../lib/zoho/sales-orders.ts";
import { isCandidateDemandOrder } from "../lib/mrp/demand-from-zoho.ts";

const inventoryItems = await getInventoryItems();
const inventoryTrackedSkus = new Set(inventoryItems.map((item) => item.sku));

const headers = await listAllSalesOrderHeaders({
  dateAfter: process.env.ZOHO_DEMAND_DATE_AFTER || "2025-01-01",
});

const candidates = headers.filter(isCandidateDemandOrder);

console.log(`Candidates: ${candidates.length}`);

const debug = [];

for (const header of candidates.slice(0, 10)) {
  const detail = await getSalesOrderDetail(header.salesorder_id);

  debug.push({
    salesorder_number: detail.salesorder_number,
    status: detail.status,
    order_status: detail.order_status,
    current_sub_status: detail.current_sub_status,
    is_drop_shipment: detail.is_drop_shipment,
    quantity: detail.quantity,
    quantity_packed: detail.quantity_packed,
    line_items: (detail.line_items ?? []).map((line) => ({
      sku: line.sku,
      name: line.name,
      quantity: line.quantity,
      quantity_cancelled: line.quantity_cancelled,
      quantity_packed: line.quantity_packed,
      sku_matches_inventory: inventoryTrackedSkus.has(line.sku),
    })),
  });
}

writeFileSync("debug-demand-candidates.json", JSON.stringify(debug, null, 2));

console.log("Wrote debug-demand-candidates.json");