import { notFound } from "next/navigation";
import { getDemandItemsByOrderNumber } from "@/lib/demand-data";
import Link from "next/link";

export default async function DemandDetailPage({
  params,
}: {
  params: Promise<{ orderNumber: string }>;
}) {
  const { orderNumber } = await params;

  const demandItems = await getDemandItemsByOrderNumber(orderNumber);

  if (demandItems.length === 0) {
    notFound();
  }

  const firstLine = demandItems[0];

  return (
    <section>
      <h1 className="text-3xl font-bold">Sales Order {orderNumber}</h1>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div>
          <span className="font-semibold">Customer:</span>{" "}
          {firstLine.customerName}
        </div>

        <div className="mt-2">
          <span className="font-semibold">Due Date:</span> {firstLine.dueDate}
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
            {demandItems.map((item) => (
              <tr key={`${item.orderNumber}-${item.sku}`} className="border-t border-slate-800">
                <td className="p-4 font-mono">
                    <Link 
                        href={`/items/${encodeURIComponent(item.sku)}`}
                        className="hover:underline"
                    >
                        {item.sku}
                    </Link>
                </td>
                <td className="p-4 text-right">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}