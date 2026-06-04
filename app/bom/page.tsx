import { getBomLines } from "@/lib/bom-data";
import Link from "next/link";

export default async function BomPage() {
  const bomLines = await getBomLines();

  const parentSkus = [...new Set(bomLines.map((line) => line.parentSku))];

  return (
    <section>
      <h1 className="text-3xl font-bold">BOM Explorer</h1>
      <p className="mt-2 text-slate-300">
        Product structure by parent SKU and component.
      </p>

      <div className="mt-8 space-y-6">
        {parentSkus.map((parentSku) => {
          const children = bomLines.filter(
            (line) => line.parentSku === parentSku
          );

          return (
            <div
              key={parentSku}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6"
            >
              <h2 className="font-mono text-xl font-bold">{parentSku}</h2>

              <div className="mt-4 overflow-hidden rounded-lg border border-slate-800">
                <table className="w-full border-collapse text-left">
                  <thead className="bg-slate-950 text-slate-300">
                    <tr>
                      <th className="p-4">Component SKU</th>
                      <th className="p-4 text-right">Qty Per</th>
                    </tr>
                  </thead>

                  <tbody>
                    {children.map((child) => (
                      <tr
                        key={`${child.parentSku}-${child.childSku}`}
                        className="border-t border-slate-800"
                      >
                        <td className="p-4 font-mono">
                        <Link
                            href={`/bom/${encodeURIComponent(child.childSku)}`}
                            className="hover:underline"
                        >
                            {child.childSku}
                        </Link>
                        <Link
                        href={`/where-used/${encodeURIComponent(child.childSku)}`}
                        className="ml-3 text-xs text-slate-400 hover:text-white"
                        >
                        where used 
                        </Link>
                        <span className="mx-1 text-slate-500">|</span>               
                        <Link
                            href={`/items/${encodeURIComponent(child.childSku)}`}
                            className="text-xs text-slate-400 hover:text-white"
                        >
                            item    
                        </Link>
                        </td>
                        <td className="p-4 text-right">{child.qtyPer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}