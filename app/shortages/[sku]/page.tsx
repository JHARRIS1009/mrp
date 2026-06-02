import Link from "next/link";
import { calculateShortageTrace } from "@/lib/mrp";

export default async function ShortageDetailPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const decodedSku = decodeURIComponent(sku);

  const traces = await calculateShortageTrace(decodedSku);

  const totalRequired = traces.reduce(
    (sum, trace) => sum + trace.requiredQuantity,
    0
  );

  const summaryBySource = traces.reduce(
    (summary, trace) => {
      const key = `${trace.orderNumber}-${trace.sourceSku}`;
      const existing = summary.get(key);

      if (existing) {
        existing.required += trace.requiredQuantity;
      } else {
        summary.set(key, {
          sourceSku: trace.sourceSku,
          orderNumber: trace.orderNumber,
          customerName: trace.customerName,
          required: trace.requiredQuantity,
        });
      }

      return summary;
    },
    new Map<
      string,
      {
        sourceSku: string;
        orderNumber: string;
        customerName: string;
        required: number;
      }
    >()
  );

  const demandSourceCount = traces.length;

  return (
    <section>
      <Link href="/shortages" className="text-sm text-slate-300 hover:text-white">
        ← Back to Shortages
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Requirement Trace</h1>

      <p className="mt-2 text-slate-300">
        Why <span className="font-mono text-white">{decodedSku}</span> is required.
      </p>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div className="text-2xl font-bold">
          {totalRequired} {decodedSku} Required
        </div>

        <p className="mt-2 text-slate-300">
          Generated from {demandSourceCount} demand source
          {demandSourceCount === 1 ? "" : "s"}.
        </p>
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-6">

      <div className="mt-4 space-y-3">
          {[...summaryBySource.values()].map((source) => (
            <div
              key={`${source.orderNumber}-${source.sourceSku}`}
              className="rounded-lg border border-slate-800 p-4"
            >
              <div className="text-xl font-mono font-semibold">
                {source.sourceSku}
              </div>

              <div className="font-mono">
                {source.required} Required
              </div>

              <div className="mt-1 text-sm text-slate-300">
                <Link href={`/demand/${source.orderNumber}`} className="hover:underline">
                  Sales Order {source.orderNumber}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">Order</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Due Date</th>
              <th className="p-4">Source SKU</th>
              <th className="p-4">Path</th>
              <th className="p-4 text-right">Demand Qty</th>
              <th className="p-4 text-right">Net Build Qty</th>
              <th className="p-4 text-right">Qty Per</th>
              <th className="p-4 text-right">Required Qty</th>
            </tr>
          </thead>

          <tbody>
            {traces.map((trace, index) => (
              <tr
                key={`${trace.sourceSku}-${trace.componentSku}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                  <Link href={`/demand/${trace.orderNumber}`} className="hover:underline">
                    {trace.orderNumber}
                  </Link>
                </td>
                <td className="p-4">{trace.customerName}</td>
                <td className="p-4">{trace.dueDate}</td>
                <td className="p-4 font-mono">{trace.sourceSku}</td>
                <td className="p-4 font-mono">{trace.path.join(" → ")}</td>
                <td className="p-4 text-right">{trace.demandQuantity}</td>
                <td className="p-4 text-right">{trace.netBuildQuantity}</td>
                <td className="p-4 text-right">{trace.qtyPer}</td>
                <td className="p-4 text-right font-semibold">
                  {trace.requiredQuantity}
                </td>
              </tr>
            ))}

            {traces.length === 0 && (
              <tr className="border-t border-slate-800">
                <td className="p-4 text-slate-300" colSpan={9}>
                  No trace lines found for this SKU.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}