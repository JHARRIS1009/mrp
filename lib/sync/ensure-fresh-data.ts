import crypto from "node:crypto";

import { listAllSalesOrderHeaders } from "@/lib/zoho/sales-orders";
import { listAllPurchaseOrderHeaders } from "@/lib/zoho/purchase-orders";
import {
  listAllItems,
  listAllCompositeItemsAsInventoryItems,
} from "@/lib/zoho/items";
import { listAllCompositeItemHeaders } from "@/lib/zoho/composite-items";

import { readSyncState, writeSyncState } from "@/lib/sync/state";

import { generateDemandData } from "@/lib/generators/generate-demand-data";
import { generatePurchaseOrdersData } from "@/lib/generators/generate-purchase-orders-data";
import { generateInventoryData } from "@/lib/generators/generate-inventory-data";
import { generateBomData } from "@/lib/generators/generate-bom-data";
import type { InventoryItem } from "@/lib/data/inventory";

const CHECK_INTERVAL_MS = 5 * 60 * 1000;

export type FreshDataResult = {
  demandChanged: boolean;
  purchaseOrdersChanged: boolean;
  inventorySkuListChanged: boolean;
  inventoryQuantityChanged: boolean;
  compositeItemsChanged: boolean;
};

function hashData(value: unknown) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(value))
    .digest("hex");
}

function isStale(lastCheck?: string) {
  if (!lastCheck) return true;

  const lastTime = new Date(lastCheck).getTime();

  if (!Number.isFinite(lastTime)) return true;

  return Date.now() - lastTime > CHECK_INTERVAL_MS;
}

function inventorySkuSnapshot(items: any[]) {
  return items
    .map((item) => String(item.sku ?? "").trim())
    .filter(Boolean)
    .sort();
}

function inventoryQuantitySnapshot(items: any[]) {
  return items
    .map((item) => ({
      sku: String(item.sku ?? "").trim(),
      status: item.status,
      trackInventory: item.track_inventory,
      stockOnHand: Number(item.stock_on_hand ?? 0),
      availableStock: Number(item.available_stock ?? 0),
      actualAvailableStock: Number(item.actual_available_stock ?? 0),
      committedStock: Number(item.committed_stock ?? 0),
      actualCommittedStock: Number(item.actual_committed_stock ?? 0),
    }))
    .filter((item) => item.sku)
    .sort((a, b) => a.sku.localeCompare(b.sku));
}

export async function ensureFreshData(): Promise<FreshDataResult> {
  console.log("\n========================================");
  console.log("[SYNC] Starting freshness check");
  console.log("========================================");

  const state = await readSyncState();

  let demandChanged = false;
  let purchaseOrdersChanged = false;
  let inventorySkuListChanged = false;
  let inventoryQuantityChanged = false;
  let compositeItemsChanged = false;
  let refreshedInventoryItems: InventoryItem[] | undefined;

  const now = new Date().toISOString();

  if (isStale(state.lastDemandCheck)) {
    console.log("[SYNC] Checking Demand...");

    const demandHeaders = await listAllSalesOrderHeaders({
      dateAfter: process.env.ZOHO_DEMAND_DATE_AFTER || "2025-01-01",
    });

    console.log(`[SYNC] Demand headers fetched: ${demandHeaders.length}`);

    const demandHash = hashData(
      demandHeaders.map((order) => ({
        id: order.salesorder_id,
        number: order.salesorder_number,
        status: order.status,
        orderStatus: order.order_status,
        subStatus: order.current_sub_status,
        quantity: order.quantity,
        packed: order.quantity_packed,
        shipped: order.quantity_shipped,
        invoiced: order.quantity_invoiced,
        isDropShipment: order.is_drop_shipment,
        modified: (order as any).last_modified_time,
      }))
    );

    demandChanged = demandHash !== state.demandHash;

    console.log(`[SYNC] Demand changed: ${demandChanged}`);

    state.demandHash = demandHash;
    state.lastDemandCheck = now;
  } else {
    console.log("[SYNC] Demand check skipped (fresh)");
  }

  if (isStale(state.lastPurchaseOrderCheck)) {
    console.log("[SYNC] Checking Purchase Orders...");

    const poHeaders = await listAllPurchaseOrderHeaders();

    console.log(`[SYNC] Purchase Order headers fetched: ${poHeaders.length}`);

    const purchaseOrderHash = hashData(
      poHeaders.map((po) => ({
        id: po.purchaseorder_id,
        number: po.purchaseorder_number,
        status: po.status,
        orderStatus: po.order_status,
        subStatus: po.current_sub_status,
        receivedStatus: po.received_status,
        isDropShipment: po.is_drop_shipment,
        qtyYetToReceive: po.quantity_yet_to_receive,
        totalOrdered: po.total_ordered_quantity,
        deliveryDate: po.delivery_date,
        expectedDeliveryDate: po.expected_delivery_date,
        modified: (po as any).last_modified_time,
      }))
    );

    purchaseOrdersChanged = purchaseOrderHash !== state.purchaseOrderHash;

    console.log(`[SYNC] Purchase Orders changed: ${purchaseOrdersChanged}`);

    state.purchaseOrderHash = purchaseOrderHash;
    state.lastPurchaseOrderCheck = now;
  } else {
    console.log("[SYNC] Purchase Order check skipped (fresh)");
  }

  if (
    demandChanged ||
    purchaseOrdersChanged ||
    isStale(state.lastInventoryCheck)
  ) {
    console.log("[SYNC] Checking Inventory...");

    const regularItems = await listAllItems();
    const compositeItems = await listAllCompositeItemsAsInventoryItems();

    const allInventoryItems = [...regularItems, ...compositeItems];

    console.log(`[SYNC] Regular Items: ${regularItems.length}`);
    console.log(`[SYNC] Composite Items: ${compositeItems.length}`);
    console.log(`[SYNC] Total Inventory Records: ${allInventoryItems.length}`);

    const inventorySkuHash = hashData(
      inventorySkuSnapshot(allInventoryItems)
    );

    const inventoryQuantityHash = hashData(
      inventoryQuantitySnapshot(allInventoryItems)
    );

    inventorySkuListChanged = inventorySkuHash !== state.inventorySkuHash;
    inventoryQuantityChanged =
      inventoryQuantityHash !== state.inventoryQuantityHash;

    console.log(
      `[SYNC] Inventory SKU list changed: ${inventorySkuListChanged}`
    );

    console.log(
      `[SYNC] Inventory quantities changed: ${inventoryQuantityChanged}`
    );

    state.inventorySkuHash = inventorySkuHash;
    state.inventoryQuantityHash = inventoryQuantityHash;
    state.lastInventoryCheck = now;
  } else {
    console.log("[SYNC] Inventory check skipped");
  }

  if (inventorySkuListChanged || isStale(state.lastBomCheck)) {
    console.log("[SYNC] Checking Composite Items...");

    const compositeHeaders = await listAllCompositeItemHeaders();

    console.log(
      `[SYNC] Composite Item headers fetched: ${compositeHeaders.length}`
    );

    const compositeItemHash = hashData(
      compositeHeaders
        .map((item) => ({
          id: item.composite_item_id,
          sku: item.sku,
          status: item.status,
        }))
        .sort((a, b) => String(a.sku).localeCompare(String(b.sku)))
    );

    compositeItemsChanged = compositeItemHash !== state.compositeItemHash;

    console.log(`[SYNC] Composite Items changed: ${compositeItemsChanged}`);

    state.compositeItemHash = compositeItemHash;
    state.lastBomCheck = now;
  } else {
    console.log("[SYNC] Composite Item check skipped");
  }

  if (
    demandChanged ||
    purchaseOrdersChanged ||
    inventorySkuListChanged ||
    inventoryQuantityChanged
  ) {
    console.log("[SYNC] Inventory changed. Regenerating inventory data...");
    const inventoryResult = await generateInventoryData();
    refreshedInventoryItems = inventoryResult.inventory;
  }

  if (demandChanged) {
    console.log("[SYNC] Demand changed. Regenerating demand data...");
    await generateDemandData({ inventoryItems: refreshedInventoryItems });
  }

  if (purchaseOrdersChanged) {
    console.log(
      "[SYNC] Purchase Orders changed. Regenerating purchase order data..."
    );
    await generatePurchaseOrdersData({ inventoryItems: refreshedInventoryItems });
  }

  if (inventorySkuListChanged || compositeItemsChanged) {
    console.log("[SYNC] Composite/BOM changed. Regenerating BOM data...");
    await generateBomData();
  }

  await writeSyncState(state);

  const result = {
    demandChanged,
    purchaseOrdersChanged,
    inventorySkuListChanged,
    inventoryQuantityChanged,
    compositeItemsChanged,
  };

  console.log("----------------------------------------");
  console.log("[SYNC] Freshness check complete");
  console.log(JSON.stringify(result, null, 2));
  console.log("========================================\n");

  return result;
}
