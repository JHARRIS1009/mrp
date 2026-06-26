import { getSupabaseAdmin } from "@/lib/supabase/server";

export type SyncState = {
  lastDemandCheck?: string;
  lastPurchaseOrderCheck?: string;
  lastInventoryCheck?: string;
  lastBomCheck?: string;

  demandHash?: string;
  purchaseOrderHash?: string;
  inventorySkuHash?: string;
  inventoryQuantityHash?: string;
  compositeItemHash?: string;
};

export async function readSyncState(): Promise<SyncState> {
  const { data, error } = await getSupabaseAdmin()
    .from("sync_state")
    .select("key, value");

  if (error) {
    throw new Error(`Failed to read sync state: ${error.message}`);
  }

  return Object.fromEntries(
    (data ?? []).map((row) => [row.key, row.value])
  ) as SyncState;
}

export async function writeSyncState(
  state: SyncState
): Promise<void> {
  const now = new Date().toISOString();
  const rows = Object.entries(state)
    .filter((entry): entry is [keyof SyncState, string] => entry[1] !== undefined)
    .map(([key, value]) => ({
      key,
      value,
      updated_at: now,
    }));

  if (rows.length === 0) {
    return;
  }

  const { error } = await getSupabaseAdmin()
    .from("sync_state")
    .upsert(rows, { onConflict: "key" });

  if (error) {
    throw new Error(`Failed to write sync state: ${error.message}`);
  }
}
