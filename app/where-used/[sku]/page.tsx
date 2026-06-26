import Link from "next/link";
import { calculateRecursiveWhereUsed } from "@/lib/where-used";
import BackButton from "@/components/BackButton";

export const dynamic = "force-dynamic";

export default async function WhereUsedPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const decodedSku = decodeURIComponent(sku);

  const usedBy = await calculateRecursiveWhereUsed(decodedSku);

  const directUsed = usedBy.filter(
    (line) => line.path.length === 2
  );

  const ultimateUsed = usedBy.filter((line) => {
    return !usedBy.some((otherLine) =>
        otherLine.path.slice(1).includes(line.parentSku)
    );
  });

  return (
    <section>
        <BackButton />

      <h1 className="mt-6 text-3xl font-bold">
        Where Used:{" "}
        <span className="font-mono">{decodedSku}</span>
      </h1>

      <p className="mt-2 text-slate-300">
        Products and subassemblies that use this SKU.
      </p>

      {/* Direct Usage */}

      <h2 className="mt-8 text-2xl font-bold">
        Directly Used In
      </h2>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">Used In</th>
              <th className="p-4 text-right">Qty Per</th>
              <th className="p-4 text-right">Total Usage</th>
            </tr>
          </thead>

          <tbody>
            {directUsed.map((line) => (
              <tr
                key={`${line.parentSku}-${line.path.join("-")}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                  <Link
                    href={`/bom/${encodeURIComponent(
                      line.parentSku
                    )}`}
                    className="hover:underline"
                  >
                    {line.parentSku}
                  </Link>
                </td>

                <td className="p-4 text-right">
                  {line.qtyPer}
                </td>

                <td className="p-4 text-right font-semibold">
                  {line.totalUsage}
                </td>
              </tr>
            ))}

            {directUsed.length === 0 && (
              <tr className="border-t border-slate-800">
                <td
                  className="p-4 text-slate-300"
                  colSpan={3}
                >
                  No direct usage found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Ultimate Usage */}

      <h2 className="mt-8 text-2xl font-bold">
        Ultimately Used In
      </h2>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">Used In</th>
              <th className="p-4">Path</th>
              <th className="p-4 text-right">
                Total Usage
              </th>
            </tr>
          </thead>

          <tbody>
            {ultimateUsed.map((line) => (
              <tr
                key={`${line.parentSku}-${line.path.join("-")}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                  <Link
                    href={`/bom/${encodeURIComponent(
                      line.parentSku
                    )}`}
                    className="hover:underline"
                  >
                    {line.parentSku}
                  </Link>
                </td>

                <td className="p-4 font-mono">
                  {line.path.join(" → ")}
                </td>

                <td className="p-4 text-right font-semibold">
                  {line.totalUsage}
                </td>
              </tr>
            ))}

            {ultimateUsed.length === 0 && (
              <tr className="border-t border-slate-800">
                <td
                  className="p-4 text-slate-300"
                  colSpan={3}
                >
                  No higher-level usage found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
