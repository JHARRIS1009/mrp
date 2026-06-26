import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import { getInventoryItems } from "../lib/inventory-data.ts";
import {
  getPurchaseOrderDetail,
  listAllPurchaseOrderHeaders,
} from "../lib/zoho/purchase-orders.ts";

const poDateAfter = process.env.ZOHO_PO_DATE_AFTER || "2026-01-01";
console.log(`Using PO date cutoff: ${poDateAfter}`);

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function numberValue(value) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function isCandidatePurchaseOrder(po) {
  const status = normalize(po.status);
  const orderStatus = normalize(po.order_status);
  const subStatus = normalize(po.current_sub_status);
  const receivedStatus = normalize(po.received_status);
  const reference = normalize(po.reference_number);
  const poDate = po.delivery_date || po.expected_delivery_date || po.date || "";

  if (poDate && poDate < poDateAfter) return false;

  if (po.is_drop_shipment === true) return false;

  if (status === "draft") return false;
  if (status === "void") return false;
  if (status === "cancelled") return false;
  if (status === "closed") return false;

  if (orderStatus === "draft") return false;
  if (orderStatus === "void") return false;
  if (orderStatus === "cancelled") return false;
  if (orderStatus === "closed") return false;

  if (subStatus === "closed") return false;

  // DFP purchase orders should not count as incoming warehouse inventory.
  if (reference.includes("dfp")) return false;

  const yetToReceive = numberValue(po.quantity_yet_to_receive);
  const ordered = numberValue(po.total_ordered_quantity);

  if (ordered <= 0) return false;
  if (yetToReceive <= 0) return false;

  // Some Zoho headers can say "received" even when status remains open.
  if (receivedStatus === "received" && yetToReceive <= 0) return false;

  return true;
}

function getOpenLineQuantity(line) {
  const ordered = numberValue(line.quantity);
  const received = numberValue(line.quantity_received);
  const cancelled = numberValue(line.quantity_cancelled);

  return ordered - received - cancelled;
}

const inventoryItems = await getInventoryItems();
const inventorySkus = new Set(inventoryItems.map((item) => item.sku));

console.log(`Loaded ${inventorySkus.size} inventory SKUs.`);

const headers = await listAllPurchaseOrderHeaders();

console.log(`Fetched ${headers.length} purchase order headers.`);

const candidates = headers.filter(isCandidatePurchaseOrder);

console.log(`Candidate purchase orders after header filter: ${candidates.length}`);

const purchaseOrderLines = [];

for (let i = 0; i < candidates.length; i += 1) {
  const header = candidates[i];

  if ((i + 1) % 10 === 0 || i === 0) {
    console.log(
      `Fetching PO detail ${i + 1}/${candidates.length}: ${header.purchaseorder_number}`
    );
  }

  const detail = await getPurchaseOrderDetail(header.purchaseorder_id);

  for (const line of detail.line_items ?? []) {
    const sku = String(line.sku ?? "").trim();

    if (!sku) continue;
    if (!inventorySkus.has(sku)) continue;

    const quantity = getOpenLineQuantity(line);

    if (quantity <= 0) continue;

    purchaseOrderLines.push({
      poNumber: detail.purchaseorder_number,
      vendorName: detail.vendor_name ?? "",
      sku,
      description: line.name || line.description || "",
      quantity,
      expectedDate:
        detail.expected_delivery_date ||
        detail.delivery_date ||
        detail.date ||
        "",
    });
  }
}

purchaseOrderLines.sort((a, b) => {
  const dateCompare = a.expectedDate.localeCompare(b.expectedDate);
  if (dateCompare !== 0) return dateCompare;
  return a.sku.localeCompare(b.sku);
});

const output = `// Auto-generated from Zoho Books API.
// Do not edit manually.

export type PurchaseOrderLine = {
  poNumber: string;
  vendorName: string;
  sku: string;
  description: string;
  quantity: number;
  expectedDate: string;
};

const purchaseOrderLines: PurchaseOrderLine[] = ${JSON.stringify(
  purchaseOrderLines,
  null,
  2
)};

export async function getPurchaseOrderLines(): Promise<PurchaseOrderLine[]> {
  return purchaseOrderLines;
}

export async function getPurchaseOrderLinesBySku(
  sku: string
): Promise<PurchaseOrderLine[]> {
  return purchaseOrderLines.filter((line) => line.sku === sku);
}

export async function getPurchaseOrderLinesByPoNumber(
  poNumber: string
): Promise<PurchaseOrderLine[]> {
  return purchaseOrderLines.filter((line) => line.poNumber === poNumber);
}
`;

writeFileSync("lib/purchase-orders-data.ts", output);

console.log(
  `Wrote ${purchaseOrderLines.length} purchase order lines to lib/purchase-orders-data.ts`
);