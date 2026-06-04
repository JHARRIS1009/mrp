import Link from "next/link";
import { calculateMrpExceptions } from "@/lib/mrp-exceptions";

export default async function ExceptionsPage() {
  const exceptions = await calculateMrpExceptions();

  return (
    <section>
      <h1 className="text-3xl font-bold">MRP Exceptions</h1>

      <p className="mt-2 text-slate-300">
        SKUs with current or projected inventory problems.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4">Exception Type</th>
              <th className="p-4 text-right">Gross Required</th>
              <th className="p-4 text-right">Available</th>
              <th className="p-4 text-right">Incoming</th>
              <th className="p-4 text-right">Net Required</th>
              <th className="p-4 text-right">Lowest Projected</th>
              <th className="p-4">Links</th>
            </tr>
          </thead>

          <tbody>
            {exceptions.map((item) => (
                <tr key={item.sku} className="border-t border-slate-800">
                <td className="p-4 font-mono">{item.sku}</td>
                <td className="p-4">
                    <span className={
                        item.type === "Current Shortage"
                            ? "font-semibold text-red-400"
                            : "font-semibold text-yellow-400"
                    }
                    >
                        {item.type}
                    </span>
                </td>
                <td className="p-4 text-right">{item.grossRequired}</td>
                <td className="p-4 text-right">{item.available}</td>
                <td className="p-4 text-right">{item.incoming}</td>
                <td className="p-4 text-right font-semibold">{item.netRequired}</td>
                <td className="p-4 text-right font-semibold">
                    {item.lowestProjectedAvailable}
                </td>
                <td className="p-4">
                    <div className="flex gap-4 text-sm">
                    <Link
                        href={`/shortages/${encodeURIComponent(item.sku)}`}
                        className="hover:underline"
                    >
                        Trace
                    </Link>

                    <Link
                        href={`/projected/${encodeURIComponent(item.sku)}`}
                        className="hover:underline"
                    >
                        Projected
                    </Link>
                    </div>
                </td>
                </tr>
            ))}

            {exceptions.length === 0 && (
              <tr className="border-t border-slate-800">
                <td className="p-4 text-slate-300" colSpan={8}>
                  No current or projected MRP exceptions.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}