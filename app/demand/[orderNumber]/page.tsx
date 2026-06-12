import { notFound } from "next/navigation";
import { getDemandItemsByOrderNumber } from "@/lib/demand-data";
import { formatDate } from "@/lib/date-utils";
import Link from "next/link";

function getAgeInfo(orderDate: string) {
  if (!orderDate) {
    return {
      text: "Unknown",
      className: "text-slate-300",
    };
  }

  const orderTime = new Date(orderDate).getTime();
  const now = Date.now();

  if (!Number.isFinite(orderTime)) {
    return {
      text: "Unknown",
      className: "text-slate-300",
    };
  }

  const days = Math.floor((now - orderTime) / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);

  let text: string;

  if (days <= 0) {
    text = "Today";
  } else if (days < 7) {
    text = `${days} day${days === 1 ? "" : "s"} old`;
  } else {
    text = `${weeks} week${weeks === 1 ? "" : "s"} / ${days} days old`;
  }

  let className = "text-white";

  if (days >= 28) {
    className = "text-red-400";
  } else if (days >= 7) {
    className = "text-yellow-400";
  }

  return { text, className };
}

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

  const ageInfo = getAgeInfo(firstLine.orderDate);

  return (
    <section>
      <h1 className="text-3xl font-bold">Sales Order {orderNumber}</h1>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div>
          <span className="font-semibold">Customer:</span>{" "}
          {firstLine.customerName}
        </div>

        <div className="mt-2">
          <span className="font-semibold">Sales Order Date:</span>{" "}
          {formatDate(firstLine.orderDate)}
        </div>

        <div className="mt-2">
          <span className="font-semibold">Age:</span>{" "}
          <span className={ageInfo.className}>
            {ageInfo.text}
          </span>
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
            {demandItems.map((item, index) => (
              <tr
                key={`${item.orderNumber}-${item.sku}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                  <Link
                    href={`/items/${encodeURIComponent(item.sku)}`}
                    className="hover:underline"
                  >
                    {item.sku}
                  </Link>
                </td>
                <td className="p-4 text-right">{item.quantityOpen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}