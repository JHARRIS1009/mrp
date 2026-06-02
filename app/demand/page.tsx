import { getDemandItems } from "@/lib/demand-data";

export default async function DemandPage() {
  const demandItems = await getDemandItems();

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
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
              <th className="p-4 text-right">Due Date</th>
            </tr>
          </thead>

          <tbody>
            {demandItems.map((item) => (
              <tr key={item.sku} className="border-t border-slate-800">
                <td className="p-4 font-mono">{item.orderNumber}</td>
                <td className="p-4 font-mono">{item.customerName}</td>
                <td className="p-4 font-mono">{item.sku}</td>
                <td className="p-4 font-mono">{item.quantity}</td>
                <td className="p-4 text-right">{item.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}