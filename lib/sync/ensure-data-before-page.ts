import { ensureFreshData } from "@/lib/sync/ensure-fresh-data";

let syncPromise: Promise<unknown> | null = null;

export function ensureDataBeforePage() {
  console.log("[SYNC] Checking data freshness...");

  if (!syncPromise) {
    console.log("[SYNC] Starting background fresh data check.");

    syncPromise = ensureFreshData()
      .then((result) => {
        console.log("[SYNC] Background freshness check complete:", result);
        return result;
      })
      .catch((error) => {
        console.error("[SYNC] Background freshness check failed:", error);
      })
      .finally(() => {
        console.log("[SYNC] Sync lock released.");
        syncPromise = null;
      });
  } else {
    console.log("[SYNC] Freshness check already running.");
  }
}