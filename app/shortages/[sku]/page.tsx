import Link from "next/link";
import { calculateShortageTrace, calculateShortages } from "@/lib/mrp";
import { getPurchaseOrderLinesBySku } from "@/lib/purchase-orders-data";
import { formatDate } from "@/lib/date-utils";

export default async function ShortageDetailPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const decodedSku = decodeURIComponent(sku);

  const traces = await calculateShortageTrace(decodedSku);
  const shortages = await calculateShortages();
  const shortage = shortages.find((item) => item.sku === decodedSku);

  const purchaseOrderLines = await getPurchaseOrderLinesBySku(decodedSku);

  const totalRequired = traces.reduce(
    (sum, trace) => sum + trace.requiredQuantity,
    0
  );

  const totalIncoming = purchaseOrderLines.reduce(
    (sum, line) => sum + line.quantity,
    0
  );

  const summaryByOrder = traces.reduce(
    (summary, trace) => {
      const existingOrder = summary.get(trace.orderNumber);

      if (existingOrder) {
        existingOrder.totalRequired += trace.requiredQuantity;

        const existingLine = existingOrder.lines.get(trace.sourceSku);

        if (existingLine) {
          existingLine.required += trace.requiredQuantity;
        } else {
          existingOrder.lines.set(trace.sourceSku, {
            sourceSku: trace.sourceSku,
            required: trace.requiredQuantity,
          });
        }
      } else {
        const lines = new Map<
          string,
          {
            sourceSku: string;
            required: number;
          }
        >();

        lines.set(trace.sourceSku, {
          sourceSku: trace.sourceSku,
          required: trace.requiredQuantity,
        });

        summary.set(trace.orderNumber, {
          orderNumber: trace.orderNumber,
          customerName: trace.customerName,
          dueDate: trace.dueDate,
          totalRequired: trace.requiredQuantity,
          lines,
        });
      }

      return summary;
    },
    new Map<
      string,
      {
        orderNumber: string;
        customerName: string;
        dueDate: string;
        totalRequired: number;
        lines: Map<
          string,
          {
            sourceSku: string;
            required: number;
          }
        >;
      }
    >()
  );

  const demandSourceCount = new Set(
    traces.map((trace) => trace.orderNumber)
  ).size;

  return (
    <section>
      <Link
        href="/shortages"
        className="text-sm text-slate-300 hover:text-white"
      >
        ← Back to Shortages
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Requirement Trace</h1>

      <p className="mt-2 text-slate-300">
        Why <span className="font-mono text-white">{decodedSku}</span> is
        required.
      </p>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <div className="text-2xl font-bold">
          {totalRequired}{" "}
          <span className="font-mono">{decodedSku}</span> Required
        </div>

        <p className="mt-2 text-slate-300">
          Generated from {demandSourceCount} demand source
          {demandSourceCount === 1 ? "" : "s"}.
        </p>

        <Link
          href={`/projected/${encodeURIComponent(decodedSku)}`}
          className="mt-4 inline-block text-sm text-slate-300 hover:text-white"
        >
          View projected inventory →
        </Link>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          <div className="rounded-lg border border-slate-800 p-4">
            <div className="text-sm text-slate-400">Gross Required</div>
            <div className="mt-1 text-xl font-semibold">
              {shortage?.required ?? totalRequired}
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 p-4">
            <div className="text-sm text-slate-400">Available</div>
            <div className="mt-1 text-xl font-semibold">
              {shortage?.available ?? 0}
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 p-4">
            <div className="text-sm text-slate-400">Incoming PO</div>
            <div className="mt-1 text-xl font-semibold">
              {shortage?.incoming ?? totalIncoming}
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 p-4">
            <div className="text-sm text-slate-400">Available + Incoming</div>
            <div className="mt-1 text-xl font-semibold">
              {shortage?.projectedAvailable ?? totalIncoming}
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 p-4">
            <div className="text-sm text-slate-400">Shortage</div>
            <div className="mt-1 text-xl font-semibold">
              {shortage?.shortage ?? 0}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold">Incoming Supply</h2>

        <div className="mt-4 text-2xl font-bold">
          {totalIncoming} Incoming
        </div>

        {purchaseOrderLines.length > 0 ? (
          <div className="mt-4 overflow-hidden rounded-lg border border-slate-800">
            <table className="w-full border-collapse text-left">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="p-4">PO Number</th>
                  <th className="p-4">Vendor</th>
                  <th className="p-4 text-right">Quantity</th>
                  <th className="p-4">Expected Date</th>
                </tr>
              </thead>

              <tbody>
                {purchaseOrderLines.map((line, index) => (
                  <tr
                    key={`${line.poNumber}-${line.sku}-${index}`}
                    className="border-t border-slate-800"
                  >
                    <td className="p-4 font-mono">
                      <Link
                        href={`/purchase-orders/${encodeURIComponent(
                          line.poNumber
                        )}`}
                        className="hover:underline"
                      >
                        {line.poNumber}
                      </Link>
                    </td>
                    <td className="p-4">{line.vendorName}</td>
                    <td className="p-4 text-right">{line.quantity}</td>
                    <td className="p-4">{formatDate(line.expectedDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-slate-300">
            No open purchase orders found for this SKU.
          </p>
        )}
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold">Requirement Summary</h2>

        <div className="mt-4 space-y-3">
          {[...summaryByOrder.values()].map((order) => (
            <div
              key={order.orderNumber}
              className="rounded-lg border border-slate-800 p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-mono text-xl font-semibold">
                    Sales Order {order.orderNumber}
                  </div>

                  <div className="mt-1 text-sm text-slate-300">
                    {order.customerName}
                  </div>

                  <div className="text-sm text-slate-300">
                    Due {order.dueDate}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-semibold">
                    {order.totalRequired} Required
                  </div>

                  <Link
                    href={`/demand/${encodeURIComponent(order.orderNumber)}`}
                    className="text-sm text-slate-300 hover:text-white"
                  >
                    View Sales Order
                  </Link>
                </div>
              </div>

              <div className="mt-4 space-y-1">
                {[...order.lines.values()].map((line) => (
                  <div
                    key={`${order.orderNumber}-${line.sourceSku}`}
                    className="flex justify-between rounded border border-slate-800 px-3 py-2 text-sm"
                  >
                    <span className="font-mono">{line.sourceSku}</span>
                    <span>{line.required} Required</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">Order</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Due Date</th>
              <th className="p-4">Source SKU</th>
              <th className="p-4">Path</th>
              <th className="p-4 text-right">Demand Qty</th>
              <th className="p-4 text-right">Net Build Qty</th>
              <th className="p-4 text-right">Qty Per</th>
              <th className="p-4 text-right">Required Qty</th>
            </tr>
          </thead>

          <tbody>
            {traces.map((trace, index) => (
              <tr
                key={`${trace.orderNumber}-${trace.sourceSku}-${trace.componentSku}-${index}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">
                  <Link
                    href={`/demand/${encodeURIComponent(trace.orderNumber)}`}
                    className="hover:underline"
                  >
                    {trace.orderNumber}
                  </Link>
                </td>
                <td className="p-4">{trace.customerName}</td>
                <td className="p-4">{trace.dueDate}</td>
                <td className="p-4 font-mono">{trace.sourceSku}</td>
                <td className="p-4 font-mono">{trace.path.join(" → ")}</td>
                <td className="p-4 text-right">{trace.demandQuantity}</td>
                <td className="p-4 text-right">{trace.netBuildQuantity}</td>
                <td className="p-4 text-right">{trace.qtyPer}</td>
                <td className="p-4 text-right font-semibold">
                  {trace.requiredQuantity}
                </td>
              </tr>
            ))}

            {traces.length === 0 && (
              <tr className="border-t border-slate-800">
                <td className="p-4 text-slate-300" colSpan={9}>
                  No trace lines found for this SKU.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}