import { getInventoryItems } from "@/lib/inventory";

export default async function InventoryPage() {
    const inventoryItems = await getInventoryItems();

    return (
        <main className="min-h-screen bg-slate-950 p-8 text-white">
            <h1 className="text-3xl font-bold">Inventory</h1>
            <p className="mt-2 text-slate-300">
                Physical inventory, incoming inventory, and allocated inventory.
            </p>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-700">
                <table className="w-full border-collapse text-left">
                    <thead className="bg-slate-900 text-slate-300">
                        <tr>
                            <th className="p-4">SKU</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">On Hand</th>
                            <th className="p-4">Incoming</th>
                            <th className="p-4">Allocated</th>
                            <th className="p-4">Available</th>
                        </tr>
                    </thead>

                    <tbody>
                        {inventoryItems.map((item) => {
                            const available = item.onHand - item.allocated;

                            return (
                                <tr key={item.sku} className="border-t border-slate-800">
                                    <td className="p-4 font-mono">{item.sku}</td>
                                    <td className="p-4">{item.description}</td>
                                    <td className="p-4 text-right">{item.onHand}</td>
                                    <td className="p-4 text-right">{item.allocated}</td>
                                    <td className="p-4 text-right">{available}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    );
}