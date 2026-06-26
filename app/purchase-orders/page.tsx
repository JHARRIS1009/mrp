import { getPurchaseOrderLines } from "@/lib/data/purchase-orders";
import { formatDate } from "@/lib/date-utils";
import Link from "next/link";

export default async function PurchaseOrdersPage() {
  const purchaseOrders = await getPurchaseOrderLines();

  return (
    <section>
      <h1 className="text-3xl font-bold">
        Purchase Orders
      </h1>

      <p className="mt-2 text-slate-300">
        Open purchase orders expected into inventory.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">PO Number</th>
              <th className="p-4">Vendor</th>
              <th className="p-4">SKU</th>
              <th className="p-4 text-right">Quantity</th>
              <th className="p-4">Expected Date</th>
            </tr>
          </thead>

          <tbody>
            {purchaseOrders.map((po, index) => (
              <tr
                key={`${po.poNumber}-${po.sku}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                <Link
                    href={`/purchase-orders/${encodeURIComponent(po.poNumber)}`}
                    className="hover:underline"
                >
                    {po.poNumber}
                </Link>
                </td>
                <td className="p-4">{po.vendorName}</td>
                <td className="p-4 font-mono">
                    <Link 
                        href={`/items/${encodeURIComponent(po.sku)}`}
                        className="hover:underline"
                    >
                        {po.sku}
                    </Link>
                </td>
                <td className="p-4 text-right">{po.quantity}</td>
                <td className="p-4">{formatDate(po.expectedDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
