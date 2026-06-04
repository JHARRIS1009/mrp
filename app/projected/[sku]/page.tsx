import Link from "next/link";
import { calculateProjectedInventory } from "@/lib/projected-inventory";
import { getInventoryItems } from "@/lib/inventory-data";
import { formatDate } from "@/lib/date-utils";

export default async function ProjectedInventoryPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const decodedSku = decodeURIComponent(sku);

  const inventoryItems = await getInventoryItems();
  const inventoryItem = inventoryItems.find((item) => item.sku === decodedSku);

  const startingAvailable = inventoryItem
    ? inventoryItem.onHand - inventoryItem.allocated
    : 0;

  const events = await calculateProjectedInventory(decodedSku);

  return (
    <section>
      <Link
        href={`/shortages/${encodeURIComponent(decodedSku)}`}
        className="text-sm text-slate-300 hover:text-white"
      >
        ← Back to Requirement Trace
      </Link>

      <h1 className="mt-6 text-3xl font-bold">
        Projected Inventory:{" "}
        <span className="font-mono">{decodedSku}</span>
      </h1>

      <p className="mt-2 text-slate-300">
        Timeline of demand and incoming purchase orders.
      </p>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div className="text-sm text-slate-400">Starting Available</div>
        <div className="mt-1 text-2xl font-bold">{startingAvailable}</div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Type</th>
              <th className="p-4">Reference</th>
              <th className="p-4 text-right">Change</th>
              <th className="p-4 text-right">Projected Available</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event, index) => (
              <tr
                key={`${event.date}-${event.reference}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4">{formatDate(event.date)}</td>
                <td className="p-4">{event.type}</td>
                <td className="p-4 font-mono">{event.reference}</td>
                <td className="p-4 text-right">{event.quantityChange}</td>
                <td className="p-4 text-right font-semibold">
                  {event.projectedAvailable}
                </td>
              </tr>
            ))}

            {events.length === 0 && (
              <tr className="border-t border-slate-800">
                <td className="p-4 text-slate-300" colSpan={5}>
                  No demand or purchase order events found for this SKU.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}