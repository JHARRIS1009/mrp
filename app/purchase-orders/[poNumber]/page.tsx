import { notFound } from "next/navigation";
import { getPurchaseOrderLinesByPoNumber } from "@/lib/purchase-orders-data";
import Link from "next/link";
import { formatDate } from "@/lib/date-utils";
import BackButton from "@/components/BackButton";

export default async function PurchaseOrderDetailPage({
  params,
}: {
  params: Promise<{ poNumber: string }>;
}) {
  const { poNumber } = await params;

  const poLines = await getPurchaseOrderLinesByPoNumber(poNumber);

  if (poLines.length === 0) {
    notFound();
  }

  const firstLine = poLines[0];

  return (
    <section>
      <BackButton />

      <h1 className="mt-6 text-3xl font-bold">
        Purchase Order {poNumber}
      </h1>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div>
          <span className="font-semibold">Vendor:</span>{" "}
          {firstLine.vendorName}
        </div>

        <div className="mt-2">
          <span className="font-semibold">Expected Date:</span>{" "}
          {formatDate(firstLine.expectedDate)}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4 text-right">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {poLines.map((line, index) => (
              <tr
                key={`${line.poNumber}-${line.sku}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                    <Link
                        href={`/items/${encodeURIComponent(line.sku)}`}
                        className="hover:underline"
                    >
                        {line.sku}
                    </Link>
                </td>
                <td className="p-4 text-right">{line.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}