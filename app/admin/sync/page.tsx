import { readSyncState } from "@/lib/sync/state";
import { getInventoryItems } from "@/lib/data/inventory";
import { getDemandItems } from "@/lib/data/demand";
import { getPurchaseOrderLines } from "@/lib/data/purchase-orders";
import { getBomLines } from "@/lib/data/bom";
import { ensureDataBeforePage } from "@/lib/sync/ensure-data-before-page";

export const dynamic = "force-dynamic";

export default async function SyncPage() {
  ensureDataBeforePage();

  const sync = await readSyncState();

  const inventoryItems = await getInventoryItems();
  const demandItems = await getDemandItems();
  const purchaseOrderLines = await getPurchaseOrderLines();
  const bomLines = await getBomLines();

  return (
    <section>
      <h1 className="text-3xl font-bold">Sync Status</h1>

      <p className="mt-2 text-slate-300">
        Zoho synchronization status and MRP data counts.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <StatCard label="Inventory Items" value={inventoryItems.length} />
        <StatCard label="Demand Lines" value={demandItems.length} />
        <StatCard label="PO Lines" value={purchaseOrderLines.length} />
        <StatCard label="BOM Lines" value={bomLines.length} />
      </div>

      <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900">
        <div className="border-b border-slate-700 px-6 py-4">
          <h2 className="text-xl font-semibold">Last Sync Checks</h2>
        </div>

        <div className="p-6">
          <SyncRow label="Demand" value={sync.lastDemandCheck} />
          <SyncRow label="Purchase Orders" value={sync.lastPurchaseOrderCheck} />
          <SyncRow label="Inventory" value={sync.lastInventoryCheck} />
          <SyncRow label="BOM" value={sync.lastBomCheck} />
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900">
        <div className="border-b border-slate-700 px-6 py-4">
          <h2 className="text-xl font-semibold">Hashes</h2>
        </div>

        <div className="space-y-4 p-6 font-mono text-sm">
          <HashRow label="Demand Hash" value={sync.demandHash} />
          <HashRow label="Purchase Order Hash" value={sync.purchaseOrderHash} />
          <HashRow label="Inventory SKU Hash" value={sync.inventorySkuHash} />
          <HashRow label="Composite Item Hash" value={sync.compositeItemHash} />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
    </div>
  );
}

function SyncRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="flex border-b border-slate-800 py-3 last:border-b-0">
      <div className="w-48 font-medium">{label}</div>
      <div className="text-slate-300">{value ?? "Never"}</div>
    </div>
  );
}

function HashRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <div className="text-slate-400">{label}</div>
      <div className="break-all">{value ?? "Not Available"}</div>
    </div>
  );
}
