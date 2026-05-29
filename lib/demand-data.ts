export type DemandItem = {
  sku: string;
  quantity: number;
};

export async function getDemandItems(): Promise<DemandItem[]> {
  return [
    {
      sku: "EZ100",
      quantity: 100,
    },
    {
        sku: "EZ200",
        quantity: 50,
    },
  ];
}