export type PurchaseOrderLine = {
  poNumber: string;
  vendorName: string;
  sku: string;
  quantity: number;
  expectedDate: string;
};

export async function getPurchaseOrderLines(): Promise<PurchaseOrderLine[]> {
  return [
    {
      poNumber: "PO-1001",
      vendorName: "Bolt Supplier Inc.",
      sku: "BOLT-001",
      quantity: 500,
      expectedDate: "2026-06-10",
    },
    {
      poNumber: "PO-1002",
      vendorName: "Bearing Company",
      sku: "BEARING",
      quantity: 1000,
      expectedDate: "2026-06-20",
    },
  ];
}

export async function getPurchaseOrderLinesByPoNumber(poNumber: string) {
  const purchaseOrderLines = await getPurchaseOrderLines();

  return purchaseOrderLines.filter(
    (line) => line.poNumber === poNumber
  );
}

export async function getOpenPurchaseOrderQuantity(
  sku: string
): Promise<number> {
  const purchaseOrders = await getPurchaseOrderLines();

  return purchaseOrders
    .filter((line) => line.sku === sku)
    .reduce((sum, line) => sum + line.quantity, 0);
}

export async function getPurchaseOrderLinesBySku(sku: string) {
  const purchaseOrderLines = await getPurchaseOrderLines();

  return purchaseOrderLines.filter(
    (line) => line.sku === sku
  );
}