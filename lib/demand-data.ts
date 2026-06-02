export type DemandItems = {
  orderNumber: string;
  customerName: string;
  sku: string;
  quantity: number;
  dueDate: string;
};

export async function getDemandItems(): Promise<DemandItems[]> {
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
    {
      orderNumber: "2600003",
      customerName: "PeeWee Herman",
      sku: "EZ100",
      quantity: 25,
      dueDate: "07/15/2026",
    },
    {
      orderNumber: "2600003",
      customerName: "PeeWee Herman",
      sku: "EZ200",
      quantity: 10,
      dueDate: "07/15/2026",
    },
  ];
}

export async function getDemandItemsByOrderNumber(
  orderNumber: string
) {
  const demandItems = await getDemandItems();

  return demandItems.filter(
    (item) => item.orderNumber === orderNumber
  );
}