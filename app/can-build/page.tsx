import { calculateCanBuild } from "@/lib/can-build";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CanBuildPage() {
  const results = await calculateCanBuild();
    
  return (
    <section>
      <h1 className="text-3xl font-bold">Can Build</h1>
      <p className="mt-2 text-slate-300">
        Estimated buildable inventory based on physical on-hand components.
        Incoming inventory is ignored.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4 text-right">On Hand</th>
              <th className="p-4 text-right">Max Additional Build</th>
              <th className="p-4 text-right">Total Available</th>
              <th className="p-4">Limiting Component</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr key={result.sku} className="border-t border-slate-800">
                <td className="p-4 font-mono">
                  <Link
                    href={`/items/${encodeURIComponent(result.sku)}`}
                    className="hover:underline"
                  >
                    {result.sku}
                  </Link>
                </td>
                <td className="p-4 text-right">{result.parentOnHand}</td>
                <td className="p-4 text-right">{result.maxAdditionalBuild}</td>
                <td className="p-4 text-right font-semibold">
                  {result.totalAvailable}
                </td>
                <td className="p-4 font-mono">{result.limitingComponentSku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
