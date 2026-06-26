import { getSupabaseAdmin } from "@/lib/supabase/server";

type SyncRunStatus = "success" | "error";

export async function recordSyncRun({
  syncType,
  records,
  status,
  message,
}: {
  syncType: string;
  records: number;
  status: SyncRunStatus;
  message?: string;
}): Promise<void> {
  const { error } = await getSupabaseAdmin().from("sync_runs").insert({
    sync_type: syncType,
    records,
    status,
    message: message ?? null,
  });

  if (error) {
    throw new Error(`Failed to record sync run: ${error.message}`);
  }
}
