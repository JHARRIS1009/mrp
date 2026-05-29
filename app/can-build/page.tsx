import { getBomLines } from "@/lib/bom";
import { getInventoryItems } from "@/lib/inventory";

export default async function CanBuildPage() {
    const inventoryItems = await getInventoryItems();
    const bomLines = await getBomLines();

    const results = bomLines.map((line) => {
        const parent = inventoryItems.find((item) => item.sku === line.parentSku);
        const child = inventoryItems.find((item) => item.sku === line.childSku);

        const childAvailable = child ? child.onHand - child.allocated : 0;
        const maxAdditionalBuild = Math.floor(childAvailable / line.qtyPer);
        const parentOnHand = parent ? parent.onHand : 0;
        const totalAvailable = parentOnHand + maxAdditionalBuild;

        return {
            sku: line.parentSku,
            childSku: line.childSku,
            qtyPer: line.qtyPer,
            parentOnHand,
            childAvailable,
            maxAdditionalBuild,
            totalAvailable,
        };
    });

    return (
       <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-3xl font-bold">Can Build</h1>
      <p className="mt-2 text-slate-300">
        Estimated buildable inventory based on physical on-hand components.
        Incoming inventory is ignored.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4">Component</th>
              <th className="p-4 text-right">Qty Per</th>
              <th className="p-4 text-right">On Hand</th>
              <th className="p-4 text-right">Component Available</th>
              <th className="p-4 text-right">Max Additional Build</th>
              <th className="p-4 text-right">Total Available</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr
                key={`${result.sku}-${result.childSku}`}
                className="border-t border-slate-800"
              >
                <td className="p-4 font-mono">{result.sku}</td>
                <td className="p-4 font-mono">{result.childSku}</td>
                <td className="p-4 text-right">{result.qtyPer}</td>
                <td className="p-4 text-right">{result.parentOnHand}</td>
                <td className="p-4 text-right">{result.childAvailable}</td>
                <td className="p-4 text-right">{result.maxAdditionalBuild}</td>
                <td className="p-4 text-right font-semibold">
                  {result.totalAvailable}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  ); 
}