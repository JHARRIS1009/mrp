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
    "poNumber": "TT-000907",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR-1000",
    "quantity": 200,
    "expectedDate": "2025-06-10"
  },
  {
    "poNumber": "TT-00920",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "16GR3.1 26A",
    "quantity": 50,
    "expectedDate": "2025-11-14"
  },
  {
    "poNumber": "TT-00920",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ6.1",
    "quantity": 100,
    "expectedDate": "2025-11-14"
  },
  {
    "poNumber": "TT-00920",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR0.1",
    "quantity": 300,
    "expectedDate": "2025-11-14"
  },
  {
    "poNumber": "TT-00920",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR0.2",
    "quantity": 300,
    "expectedDate": "2025-11-14"
  },
  {
    "poNumber": "TT-00955",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ6.1",
    "quantity": 390,
    "expectedDate": "2025-09-15"
  },
  {
    "poNumber": "TT-00958",
    "vendorName": "TopweTools",
    "sku": "MT7208-100",
    "quantity": 100,
    "expectedDate": "2025-12-01"
  },
  {
    "poNumber": "TT-00958",
    "vendorName": "TopweTools",
    "sku": "MT7208-100-H",
    "quantity": 50,
    "expectedDate": "2025-12-01"
  },
  {
    "poNumber": "TT-00958",
    "vendorName": "TopweTools",
    "sku": "MT7208-34",
    "quantity": 50,
    "expectedDate": "2025-12-01"
  },
  {
    "poNumber": "TT-00964",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ1.2M",
    "quantity": 300,
    "expectedDate": "2025-10-01"
  },
  {
    "poNumber": "TT-00964",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ1.3M",
    "quantity": 300,
    "expectedDate": "2025-10-01"
  },
  {
    "poNumber": "TT-00966",
    "vendorName": "InSync Printing",
    "sku": "GR-LIT-TBTA",
    "quantity": 1000,
    "expectedDate": "2025-08-22"
  },
  {
    "poNumber": "TT-2600007",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "SB9101",
    "quantity": 30,
    "expectedDate": "2026-01-30"
  },
  {
    "poNumber": "TT-2600007",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "SB9102",
    "quantity": 30,
    "expectedDate": "2026-01-30"
  },
  {
    "poNumber": "TT-2600012",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "H1001",
    "quantity": 300,
    "expectedDate": "2026-04-30"
  },
  {
    "poNumber": "TT-2600014",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ1.10",
    "quantity": 20,
    "expectedDate": "2026-01-19"
  },
  {
    "poNumber": "TT-2600014",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ6.1",
    "quantity": 150,
    "expectedDate": "2026-01-19"
  },
  {
    "poNumber": "TT-2600044",
    "vendorName": "Linyi Zhuxin Machinery Co. LTD",
    "sku": "SB35CC",
    "quantity": 100,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600045",
    "vendorName": "TopweTools",
    "sku": "EA40",
    "quantity": 100,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600045",
    "vendorName": "TopweTools",
    "sku": "MT7208",
    "quantity": 500,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600045",
    "vendorName": "TopweTools",
    "sku": "SBTHROTTLE",
    "quantity": 100,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600050",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR-ADAPT",
    "quantity": 499,
    "expectedDate": "2026-10-01"
  },
  {
    "poNumber": "TT-2600053",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR5.2",
    "quantity": 550,
    "expectedDate": "2026-07-01"
  },
  {
    "poNumber": "TT-2600054",
    "vendorName": "Red Boar Chain & Fastener",
    "sku": "GR1.2",
    "quantity": 2,
    "expectedDate": "2026-04-22"
  },
  {
    "poNumber": "TT-2600059",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "16GR3.1 26A",
    "quantity": 100,
    "expectedDate": "2026-05-12"
  },
  {
    "poNumber": "TT-2600061",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ100SN",
    "quantity": 500,
    "expectedDate": "2026-04-22"
  },
  {
    "poNumber": "TT-2600066",
    "vendorName": "Diamond-Drives LLC",
    "sku": "GR4.3",
    "quantity": 60000,
    "expectedDate": "2026-05-06"
  },
  {
    "poNumber": "TT-2600066",
    "vendorName": "Diamond-Drives LLC",
    "sku": "GR4.4",
    "quantity": 60000,
    "expectedDate": "2026-05-06"
  },
  {
    "poNumber": "TT-2600070",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR4.1",
    "quantity": 30,
    "expectedDate": "2026-06-23"
  },
  {
    "poNumber": "TT-2600070",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR4.2",
    "quantity": 30,
    "expectedDate": "2026-06-23"
  },
  {
    "poNumber": "TT-2600071",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "EZ100SN",
    "quantity": 500,
    "expectedDate": "2026-05-21"
  },
  {
    "poNumber": "TT-2600074",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9002",
    "quantity": 200,
    "expectedDate": "2026-05-28"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR0.1",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR0.2",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR1.1",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR8.1-21A",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9001",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9002",
    "quantity": 300,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9003",
    "quantity": 500,
    "expectedDate": "2026-07-02"
  }
];
}

export async function getPurchaseOrderLinesByPoNumber(poNumber: string) {
  const purchaseOrderLines = await getPurchaseOrderLines();

  return purchaseOrderLines.filter((line) => line.poNumber === poNumber);
}

export async function getPurchaseOrderLinesBySku(sku: string) {
  const purchaseOrderLines = await getPurchaseOrderLines();

  return purchaseOrderLines.filter((line) => line.sku === sku);
}
