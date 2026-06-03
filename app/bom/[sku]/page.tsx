import Link from "next/link";
import { getBomLines } from "@/lib/bom-data";

export default async function BomDetailPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const decodedSku = decodeURIComponent(sku);

  const bomLines = await getBomLines();

  const children = bomLines.filter(
    (line) => line.parentSku === decodedSku
  );

  return (
    <section>
      <Link href="/bom" className="text-sm text-slate-300 hover:text-white">
        ← Back to BOM Explorer
      </Link>

      <h1 className="mt-6 text-3xl font-bold">
        BOM for <span className="font-mono">{decodedSku}</span>
      </h1>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
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
                </td>
                <td className="p-4 text-right">{child.qtyPer}</td>
              </tr>
            ))}

            {children.length === 0 && (
              <tr className="border-t border-slate-800">
                <td className="p-4 text-slate-300" colSpan={2}>
                  This SKU has no child components.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}