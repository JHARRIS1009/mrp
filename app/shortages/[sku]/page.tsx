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

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <Link href="/shortages" className="text-sm text-slate-300 hover:text-white">
        ← Back to Shortages
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Requirement Trace</h1>

      <p className="mt-2 text-slate-300">
        Why <span className="font-mono text-white">{decodedSku}</span> is required.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
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
                <td className="p-4 text-slate-300" colSpan={6}>
                  No trace lines found for this SKU.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}