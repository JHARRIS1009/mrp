import { getInventoryItems, type InventoryItem } from "@/lib/data/inventory";
import {
  replacePurchaseOrderLines,
  type PurchaseOrderLine,
} from "@/lib/data/purchase-orders";
import { recordSyncRun } from "@/lib/sync/runs";
import {
  getPurchaseOrderDetail,
  listAllPurchaseOrderHeaders,
} from "@/lib/zoho/purchase-orders";

function normalize(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

function numberValue(value: unknown) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export async function generatePurchaseOrdersData(options?: {
  inventoryItems?: InventoryItem[];
}) {
  const poDateAfter = process.env.ZOHO_PO_DATE_AFTER || "2026-06-01";

  console.log(`[GENERATE] PO date cutoff: ${poDateAfter}`);

  function isCandidatePurchaseOrder(po: any) {
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
    if (reference.includes("dfp")) return false;

    const yetToReceive = numberValue(po.quantity_yet_to_receive);
    const ordered = numberValue(po.total_ordered_quantity);

    if (ordered <= 0) return false;
    if (yetToReceive <= 0) return false;

    if (receivedStatus === "received" && yetToReceive <= 0) return false;

    return true;
  }

  function getOpenLineQuantity(line: any) {
    const ordered = numberValue(line.quantity);
    const received = numberValue(line.quantity_received);
    const cancelled = numberValue(line.quantity_cancelled);

    return ordered - received - cancelled;
  }

  const inventoryItems = options?.inventoryItems ?? (await getInventoryItems());
  const inventorySkus = new Set(inventoryItems.map((item) => item.sku));

  const headers = await listAllPurchaseOrderHeaders();
  const candidates = headers.filter(isCandidatePurchaseOrder);

  console.log(`[GENERATE] PO headers: ${headers.length}`);
  console.log(`[GENERATE] Candidate POs: ${candidates.length}`);

  const purchaseOrderLines: PurchaseOrderLine[] = [];

  for (let i = 0; i < candidates.length; i += 1) {
    const header = candidates[i];

    if ((i + 1) % 10 === 0 || i === 0) {
      console.log(
        `[GENERATE] Fetching PO detail ${i + 1}/${candidates.length}: ${header.purchaseorder_number}`
      );
    }

    const detail = await getPurchaseOrderDetail(header.purchaseorder_id);

    for (const line of detail.line_items ?? []) {
      const sku = String(line.sku ?? "").trim();

      if (!sku) continue;
      if (!inventorySkus.has(sku)) continue;

      const quantity = getOpenLineQuantity(line);

      if (quantity <= 0) continue;

      const expectedDate =
        detail.expected_delivery_date ||
        detail.delivery_date ||
        detail.date ||
        "";

      if (expectedDate && expectedDate < poDateAfter) continue;

      purchaseOrderLines.push({
        poNumber: detail.purchaseorder_number,
        vendorName: detail.vendor_name ?? "",
        sku,
        description: line.name || line.description || "",
        quantity,
        expectedDate,
      });
    }
  }

  purchaseOrderLines.sort((a, b) => {
    const dateCompare = a.expectedDate.localeCompare(b.expectedDate);
    if (dateCompare !== 0) return dateCompare;
    return a.sku.localeCompare(b.sku);
  });

  await replacePurchaseOrderLines(purchaseOrderLines);
  await recordSyncRun({
    syncType: "purchase_orders",
    records: purchaseOrderLines.length,
    status: "success",
    message: "Wrote purchase order lines to Supabase.",
  });

  console.log(
    `[GENERATE] Wrote ${purchaseOrderLines.length} purchase order lines to Supabase.`
  );

  return {
    records: purchaseOrderLines.length,
  };
}
