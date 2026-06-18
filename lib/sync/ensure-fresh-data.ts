import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import crypto from "node:crypto";

import { listAllSalesOrderHeaders } from "@/lib/zoho/sales-orders";
import { listAllPurchaseOrderHeaders } from "@/lib/zoho/purchase-orders";
import {
  listAllItems,
  listAllCompositeItemsAsInventoryItems,
} from "@/lib/zoho/items";
import { listAllCompositeItemHeaders } from "@/lib/zoho/composite-items";

type SyncState = {
  lastDemandCheck?: string;
  lastPurchaseOrderCheck?: string;
  lastInventoryCheck?: string;
  lastBomCheck?: string;

  demandHash?: string;
  purchaseOrderHash?: string;
  inventorySkuHash?: string;
  compositeItemHash?: string;
};

const SYNC_STATE_PATH = "data/sync-state.json";

const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

function ensureDataDir() {
  mkdirSync(dirname(SYNC_STATE_PATH), { recursive: true });
}

function readSyncState(): SyncState {
  if (!existsSync(SYNC_STATE_PATH)) {
    return {};
  }

  return JSON.parse(readFileSync(SYNC_STATE_PATH, "utf8"));
}

function writeSyncState(state: SyncState) {
  ensureDataDir();
  writeFileSync(SYNC_STATE_PATH, JSON.stringify(state, null, 2));
}

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

export type FreshDataResult = {
  demandChanged: boolean;
  purchaseOrdersChanged: boolean;
  inventorySkuListChanged: boolean;
  compositeItemsChanged: boolean;
};

export async function ensureFreshData(): Promise<FreshDataResult> {
  const state = readSyncState();

  let demandChanged = false;
  let purchaseOrdersChanged = false;
  let inventorySkuListChanged = false;
  let compositeItemsChanged = false;

  const now = new Date().toISOString();

  if (isStale(state.lastDemandCheck)) {
    const demandHeaders = await listAllSalesOrderHeaders({
      dateAfter: process.env.ZOHO_DEMAND_DATE_AFTER || "2025-01-01",
    });

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

    state.demandHash = demandHash;
    state.lastDemandCheck = now;
  }

  if (isStale(state.lastPurchaseOrderCheck)) {
    const poHeaders = await listAllPurchaseOrderHeaders();

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

    state.purchaseOrderHash = purchaseOrderHash;
    state.lastPurchaseOrderCheck = now;
  }

  if (
    demandChanged ||
    purchaseOrdersChanged ||
    isStale(state.lastInventoryCheck)
  ) {
    const regularItems = await listAllItems();
    const compositeItems = await listAllCompositeItemsAsInventoryItems();

    const inventorySkuHash = hashData(
      [...regularItems, ...compositeItems]
        .map((item) => String(item.sku ?? "").trim())
        .filter(Boolean)
        .sort()
    );

    inventorySkuListChanged = inventorySkuHash !== state.inventorySkuHash;

    state.inventorySkuHash = inventorySkuHash;
    state.lastInventoryCheck = now;
  }

  if (inventorySkuListChanged || isStale(state.lastBomCheck)) {
    const compositeHeaders = await listAllCompositeItemHeaders();

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

    state.compositeItemHash = compositeItemHash;
    state.lastBomCheck = now;
  }

  writeSyncState(state);

  return {
    demandChanged,
    purchaseOrdersChanged,
    inventorySkuListChanged,
    compositeItemsChanged,
  };
}