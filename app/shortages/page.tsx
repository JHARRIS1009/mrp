import { calculateShortages } from "@/lib/mrp";
import Link from "next/link";

export default async function ShortagesPage() {
  const shortages = await calculateShortages();

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-3xl font-bold">Shortages</h1>
      <p className="mt-2 text-slate-300">
        Component shortages based on demand, BOM, and physical inventory.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4 text-right">Gross Required</th>
              <th className="p-4 text-right">Available</th>
              <th className="p-4 text-right">Net Required</th>
              <th className="p-4 text-right">Shortage</th>
            </tr>
          </thead>

          <tbody>
            {shortages.map((item) => (
              <tr key={item.sku} className="border-t border-slate-800">
                <td className="p-4 font-mono">
                    <Link href={`/shortages/${encodeURIComponent(item.sku)}`} className="hover:underline">
                        {item.sku}
                    </Link>
                </td>
                <td className="p-4 text-right">{item.required}</td>
                <td className="p-4 text-right">{item.available}</td>
                <td className="p-4 text-right">{item.netRequired}</td>
                <td className="p-4 text-right font-semibold">
                  {item.shortage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}