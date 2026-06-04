import Link from "next/link";
import BackButton from "@/components/BackButton";
import { getInventoryItems } from "@/lib/inventory-data";
import { calculateShortages } from "@/lib/mrp";
import { getPurchaseOrderLinesBySku } from "@/lib/purchase-orders-data";
import { calculateProjectedInventory } from "@/lib/projected-inventory";
import { calculateShortageTrace } from "@/lib/mrp";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const decodedSku = decodeURIComponent(sku);

  const inventoryItems = await getInventoryItems();
  const shortages = await calculateShortages();
  const purchaseOrders = await getPurchaseOrderLinesBySku(decodedSku);
  const projectedEvents = await calculateProjectedInventory(decodedSku);

  const traces = await calculateShortageTrace(decodedSku);

  const grossRequired = traces.reduce(
    (sum, trace) => sum + trace.requiredQuantity,
    0
  );

  const item = inventoryItems.find((item) => item.sku === decodedSku);
  const shortage = shortages.find((item) => item.sku === decodedSku);

  const available = item ? item.onHand - item.allocated : 0;
  const incoming = purchaseOrders.reduce((sum, po) => sum + po.quantity, 0);

  return (
    <section>
      <BackButton />

      <h1 className="mt-6 text-3xl font-bold">
        Item: <span className="font-mono">{decodedSku}</span>
      </h1>

      <p className="mt-2 text-slate-300">
        {item?.description ?? "No item description found."}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-6">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <div className="text-sm text-slate-400">On Hand</div>
          <div className="mt-1 text-2xl font-bold">{item?.onHand ?? 0}</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <div className="text-sm text-slate-400">Allocated</div>
          <div className="mt-1 text-2xl font-bold">{item?.allocated ?? 0}</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <div className="text-sm text-slate-400">Available</div>
          <div className="mt-1 text-2xl font-bold">{available}</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <div className="text-sm text-slate-400">Incoming PO</div>
          <div className="mt-1 text-2xl font-bold">{incoming}</div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <div className="text-sm text-slate-400">Shortage</div>
          <div className="mt-1 text-2xl font-bold">
            {shortage?.shortage ?? 0}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Gross Required</div>
            <div className="mt-1 text-2xl font-bold">{grossRequired}</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={`/shortages/${encodeURIComponent(decodedSku)}`}
          className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
        >
          Requirement Trace
        </Link>

        <Link
          href={`/projected/${encodeURIComponent(decodedSku)}`}
          className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
        >
          Projected Inventory
        </Link>

        <Link
          href={`/bom/${encodeURIComponent(decodedSku)}`}
          className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
        >
          BOM
        </Link>

        <Link
          href={`/where-used/${encodeURIComponent(decodedSku)}`}
          className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
        >
          Where Used
        </Link>
      </div>

      <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">Projected Inventory Events</h2>

        <div className="mt-4 overflow-hidden rounded-lg border border-slate-800">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-950 text-slate-300">
              <tr>
                <th className="p-4">Date</th>
                <th className="p-4">Type</th>
                <th className="p-4">Reference</th>
                <th className="p-4 text-right">Change</th>
                <th className="p-4 text-right">Projected Available</th>
              </tr>
            </thead>

            <tbody>
              {projectedEvents.map((event, index) => (
                <tr
                  key={`${event.date}-${event.reference}-${index}`}
                  className="border-t border-slate-800"
                >
                  <td className="p-4">{event.date}</td>
                  <td className="p-4">{event.type}</td>
                  <td className="p-4 font-mono">{event.reference}</td>
                  <td className="p-4 text-right">{event.quantityChange}</td>
                  <td className="p-4 text-right font-semibold">
                    {event.projectedAvailable}
                  </td>
                </tr>
              ))}

              {projectedEvents.length === 0 && (
                <tr className="border-t border-slate-800">
                  <td className="p-4 text-slate-300" colSpan={5}>
                    No projected inventory events found for this SKU.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}