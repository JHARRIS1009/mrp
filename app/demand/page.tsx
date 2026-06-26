import { getDemandItems } from "@/lib/data/demand";
import { formatDate } from "@/lib/date-utils";
import Link from "next/link";

export default async function DemandPage() {
  const demandItems = await getDemandItems();

  return (
    <section>
      <h1 className="text-3xl font-bold">Demand</h1>
      <p className="mt-2 text-slate-300">
        Open demand that drives the MRP shortage calculation.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">Order Number</th>
              <th className="p-4">Customer Name</th>  
              <th className="p-4">SKU</th>
              <th className="p-4">Quantity</th>
              <th className="p-4 text-right">Order Date</th>
            </tr>
          </thead>

          <tbody>
            {demandItems.map((item, index) => (
              <tr
                key={`${item.orderNumber}-${item.sku}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                    <Link href={`/demand/${item.orderNumber}`} className="hover:underline">
                    {item.orderNumber}
                  </Link>
                </td>
                <td className="p-4 font-mono">{item.customerName}</td>
                <td className="p-4 font-mono">
                    <Link
                        href={`/items/${encodeURIComponent(item.sku)}`}
                        className="hover:underline"
                    >
                        {item.sku}
                    </Link>
                </td>
                <td className="p-4 font-mono">{item.quantityOpen}</td>
                <td className="p-4 text-right">{formatDate(item.orderDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
