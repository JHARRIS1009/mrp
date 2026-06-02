export type DemandItem = {
  orderNumber: string;
  customerName: string;
  sku: string;
  quantity: number;
  dueDate: string;
};

export async function getDemandItems(): Promise<DemandItem[]> {
  return [
    {
      orderNumber: "2600001",
      customerName: "Colonel Sanders",
      sku: "EZ100",
      quantity: 100,
      dueDate: "06/15/2026",
    },
    {
      orderNumber: "2600002",
      customerName: "King of Pop",
      sku: "EZ200",
      quantity: 50,
      dueDate: "07/01/2026",
    },
  ];
}