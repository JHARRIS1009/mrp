// Auto-generated from Zoho Books API.
// Do not edit manually.

export type PurchaseOrderLine = {
  poNumber: string;
  vendorName: string;
  sku: string;
  description: string;
  quantity: number;
  expectedDate: string;
};

const purchaseOrderLines: PurchaseOrderLine[] = [
  {
    "poNumber": "TT-2600079",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9002",
    "description": "Drive Axle for all GeoRipperT/A",
    "quantity": 1000,
    "expectedDate": "2026-06-10"
  },
  {
    "poNumber": "TT-2600045",
    "vendorName": "TopweTools",
    "sku": "EA40",
    "description": "EA40 Electric Auger Engine",
    "quantity": 100,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600045",
    "vendorName": "TopweTools",
    "sku": "MT7208",
    "description": "MT7208S - Georipper Engine",
    "quantity": 500,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600044",
    "vendorName": "Linyi Zhuxin Machinery Co. LTD",
    "sku": "SB35CC",
    "description": "35CC 4-Stroke Engine",
    "quantity": 100,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600045",
    "vendorName": "TopweTools",
    "sku": "SBTHROTTLE",
    "description": "SiBore Drill Handle Throttle and Gearbox Assembly",
    "quantity": 100,
    "expectedDate": "2026-06-17"
  },
  {
    "poNumber": "TT-2600080",
    "vendorName": "SupplyOne Northwest",
    "sku": "BX-12",
    "description": "Single Chain Box",
    "quantity": 1600,
    "expectedDate": "2026-06-19"
  },
  {
    "poNumber": "TT-2600080",
    "vendorName": "SupplyOne Northwest",
    "sku": "BX-3",
    "description": "Large GeoRipper Box \"B\"",
    "quantity": 70,
    "expectedDate": "2026-06-19"
  },
  {
    "poNumber": "TT-2600080",
    "vendorName": "SupplyOne Northwest",
    "sku": "BX-4",
    "description": "Small GeoRipper Box \"A\"",
    "quantity": 200,
    "expectedDate": "2026-06-19"
  },
  {
    "poNumber": "TT-2600080",
    "vendorName": "SupplyOne Northwest",
    "sku": "BX-5",
    "description": "GeoRipper Box \"Stabilizer\"",
    "quantity": 600,
    "expectedDate": "2026-06-19"
  },
  {
    "poNumber": "TT-2600080",
    "vendorName": "SupplyOne Northwest",
    "sku": "BX-6",
    "description": "GeoRipper Box Tray",
    "quantity": 250,
    "expectedDate": "2026-06-19"
  },
  {
    "poNumber": "TT-2600070",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR4.1",
    "description": "Right Digging Tooth",
    "quantity": 30,
    "expectedDate": "2026-06-23"
  },
  {
    "poNumber": "TT-2600070",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR4.2",
    "description": "Left Digging Tooth",
    "quantity": 30,
    "expectedDate": "2026-06-23"
  },
  {
    "poNumber": "TT-2600053",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR5.2",
    "description": "Bar Clamp Washer - Slotted",
    "quantity": 550,
    "expectedDate": "2026-07-01"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR0.1",
    "description": "Bar End Plate - Threaded",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR0.2",
    "description": "Bar End Plate - Countersunk",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR1.1",
    "description": "6 Tooth Nose Sprocket",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR8.1-21A",
    "description": "Chain Tension Block",
    "quantity": 1000,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9001",
    "description": "Minitrencher Drive Sprocket for GeoRipper and GeoRipper(R)T/A",
    "quantity": 700,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9002",
    "description": "Drive Axle for all GeoRipperT/A",
    "quantity": 300,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600075",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "MT9003",
    "description": "Labyrinth for all GeoRipperT/A",
    "quantity": 500,
    "expectedDate": "2026-07-02"
  },
  {
    "poNumber": "TT-2600050",
    "vendorName": "Ordinance Engineering Pte Ltd",
    "sku": "GR-ADAPT",
    "description": "GeoRipper Adapter Assembled - No Dirt/Mud",
    "quantity": 499,
    "expectedDate": "2026-10-01"
  }
];

export async function getPurchaseOrderLines(): Promise<PurchaseOrderLine[]> {
  return purchaseOrderLines;
}

export async function getPurchaseOrderLinesBySku(
  sku: string
): Promise<PurchaseOrderLine[]> {
  return purchaseOrderLines.filter((line) => line.sku === sku);
}

export async function getPurchaseOrderLinesByPoNumber(
  poNumber: string
): Promise<PurchaseOrderLine[]> {
  return purchaseOrderLines.filter((line) => line.poNumber === poNumber);
}
