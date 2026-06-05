export type BomLine = {
  parentSku: string;
  childSku: string;
  qtyPer: number;
};

export async function getBomLines(): Promise<BomLine[]> {
  return [
  {
    "parentSku": "EZ1.11",
    "childSku": "EZ1.11M",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ1.11",
    "childSku": "EZ1.11P",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ1.2",
    "childSku": "EZ1.2M",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ1.2",
    "childSku": "EZ1.2P",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ1.3",
    "childSku": "EZ1.3M",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ1.3",
    "childSku": "EZ1.3P",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.1",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.10",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.11",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.11.1",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.12",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.13",
    "qtyPer": 2
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.16",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.3",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.9",
    "qtyPer": 2
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ1.9.1",
    "qtyPer": 2
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ2001",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ2002",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ3001",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ4005",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ4006",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ6",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "EZ6000",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "GR8.3",
    "qtyPer": 3
  },
  {
    "parentSku": "EZ100",
    "childSku": "GR8.4",
    "qtyPer": 3
  },
  {
    "parentSku": "EZ100",
    "childSku": "GRS8",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ100",
    "childSku": "MT95193",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ1.10",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ1.13",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ1.16",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ1.3",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ2001",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "EZ2002",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "GR8.3",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "GR8.4",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ2000",
    "childSku": "MT95193",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ3.4",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ3.5",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ3.6",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ3.7",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ6.1",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ6.2",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ3000",
    "childSku": "EZ6.3",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ5000",
    "childSku": "EZ1.9",
    "qtyPer": 2
  },
  {
    "parentSku": "EZ5000",
    "childSku": "EZ1.9.1",
    "qtyPer": 2
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ3.4",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ3.5",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ3.6",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ3.7",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ6.1",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ6.2",
    "qtyPer": 1
  },
  {
    "parentSku": "EZ6",
    "childSku": "EZ6.3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "BX-3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "BX-5",
    "qtyPer": 3
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "GR700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "MT3500",
    "qtyPer": 2
  },
  {
    "parentSku": "GR20-EK7651H-EZ",
    "childSku": "MT4502",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-G",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-G",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR20-EK7651H-G",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-G",
    "childSku": "GR700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR20-EK7651H-G",
    "childSku": "MT3500",
    "qtyPer": 2
  },
  {
    "parentSku": "GR20-EK7651H-G",
    "childSku": "MT4502",
    "qtyPer": 1
  },
  {
    "parentSku": "GR4.1",
    "childSku": "GR4.1M-20A",
    "qtyPer": 1
  },
  {
    "parentSku": "GR4.1",
    "childSku": "GR4.1P",
    "qtyPer": 1
  },
  {
    "parentSku": "GR4.2",
    "childSku": "GR4.2M-20A",
    "qtyPer": 1
  },
  {
    "parentSku": "GR4.2",
    "childSku": "GR4.2P",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR416",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "GR457",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GR416",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GR416",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "GR-1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GR457",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GR457",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GR457",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GR457",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GR457",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GR457",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GR457",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0800",
    "qtyPer": 3
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GR457",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GR457",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT7208",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GR457",
    "childSku": "MTB72-00",
    "qtyPer": 2
  },
  {
    "parentSku": "GR520",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR520",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520",
    "childSku": "GR457",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GR520",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "BX-3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "BX-5",
    "qtyPer": 3
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "GR457",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GR520EZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GR600",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRKM61.2-20A",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRKM61.3-20A",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRKM61.4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRKM61.5",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRKM61.6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRKM61.8",
    "qtyPer": 2
  },
  {
    "parentSku": "GR600",
    "childSku": "GRM61",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRS2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRS5",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "GRS6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "Labor30",
    "qtyPer": 0.5
  },
  {
    "parentSku": "GR600",
    "childSku": "MGR5",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GR600",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "MT9601",
    "qtyPer": 1
  },
  {
    "parentSku": "GR600",
    "childSku": "MTB61-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GR616",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR616",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR616",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR616",
    "childSku": "GR600",
    "qtyPer": 1
  },
  {
    "parentSku": "GR616",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GR616",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GR620",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR620",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR620",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR620",
    "childSku": "GR600",
    "qtyPer": 1
  },
  {
    "parentSku": "GR620",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR620",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GR700",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GR700",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GR700",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GR700",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "GRM76",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GRS1",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GRS4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "GRS6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "Labor30",
    "qtyPer": 0.5
  },
  {
    "parentSku": "GR700",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "MT0825",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GR700",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GR700",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GR716",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR716",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR716",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR716",
    "childSku": "GR700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR716",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GR716",
    "childSku": "MT4402",
    "qtyPer": 1
  },
  {
    "parentSku": "GR720",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR720",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR720",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR720",
    "childSku": "GR700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR720",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR720",
    "childSku": "MT4502",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "BX-3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "BX-5",
    "qtyPer": 3
  },
  {
    "parentSku": "GR727",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "GR457",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GR727",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "GR457",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GR727-NOEZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR8",
    "childSku": "GR8.1-21A",
    "qtyPer": 1
  },
  {
    "parentSku": "GR8",
    "childSku": "GR8.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GR8",
    "childSku": "GR8.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GR8",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GR8",
    "childSku": "MT0835",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GR800",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GR800",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GR800",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GR800",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "GRM81",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GRS2",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GRS6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "GRS7",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "Labor30",
    "qtyPer": 0.5
  },
  {
    "parentSku": "GR800",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "MT0825",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GR800",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GR800",
    "childSku": "MTB81-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GR816",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR816",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR816",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR816",
    "childSku": "GR800",
    "qtyPer": 1
  },
  {
    "parentSku": "GR816",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GR816",
    "childSku": "MT4402",
    "qtyPer": 1
  },
  {
    "parentSku": "GR820",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GR820",
    "childSku": "BX-5",
    "qtyPer": 2
  },
  {
    "parentSku": "GR820",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR820",
    "childSku": "GR800",
    "qtyPer": 1
  },
  {
    "parentSku": "GR820",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GR820",
    "childSku": "MT4502",
    "qtyPer": 1
  },
  {
    "parentSku": "GR827",
    "childSku": "BX-3",
    "qtyPer": 1
  },
  {
    "parentSku": "GR827",
    "childSku": "BX-5",
    "qtyPer": 3
  },
  {
    "parentSku": "GR827",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GR827",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GR827",
    "childSku": "GR800",
    "qtyPer": 1
  },
  {
    "parentSku": "GR827",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GR827",
    "childSku": "MT4702",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "BX-5",
    "qtyPer": 4
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "G1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "G1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GRS6",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GW82BD800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GW82DPC8A",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "GW82PC12",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT0420",
    "qtyPer": 9
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT0800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT0835",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB-GW00",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "BX-5",
    "qtyPer": 4
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "EZ3GW",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "G1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "G1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GRS6",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GW82BD800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GW82DPC8A",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "GW82PC12",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0420",
    "qtyPer": 9
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT0835",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "EZ3GW",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "G1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "G1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0420",
    "qtyPer": 9
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT0825",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT2000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT4400-2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT8000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-GW-NM",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "EZ1.3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "EZ2001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT5000-MAK",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "EZ1.3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "EZ2001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR MISC",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT5000-MAK",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB400-MAK-NM",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "BX-5",
    "qtyPer": 4
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "BX-6",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "EZ3GW",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "G1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "G1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GRS6",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GW82BD800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GW82DPC8A",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "GW82PC12",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0420",
    "qtyPer": 9
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT0835",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "EZ3GW",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "G1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "G1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0420",
    "qtyPer": 9
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0800",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT0825",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT2000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT4500-2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT8000",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-GW-NM",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "EZ1.3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "EZ2001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT5000-MAK",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "EZ1.3",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "EZ2001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR MISC",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT4500-2",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT5000-MAK",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GREB500-MAK-NM",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GRKM61.2-20A",
    "qtyPer": 1
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GRKM61.3-20A",
    "qtyPer": 1
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GRKM61.4",
    "qtyPer": 1
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GRKM61.5",
    "qtyPer": 1
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GRKM61.6",
    "qtyPer": 1
  },
  {
    "parentSku": "GRKM61",
    "childSku": "GRKM61.8",
    "qtyPer": 2
  },
  {
    "parentSku": "GRKM61",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRKM61",
    "childSku": "MT9601",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E400-NOEZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500-NOEZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0825",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT95016A",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E500EZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT95192",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700-NOEZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "E1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT4702",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-E700EZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT7208-100-H",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT7208-100-H",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H400-NOEZ",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "GS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT7208-100-H",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT7208-100-H",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500-NOEZ",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "H1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT4502",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MTB77-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H500EZ",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT7208-100-H",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT7208-100-H",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT95192",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700-NOEZ",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "H1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "H1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0801",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT4702",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT95016B",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-H700EZ",
    "childSku": "MTB97-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500",
    "childSku": "MTB81-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT0865",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT4502",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT95016A",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M500EZ",
    "childSku": "MTB81-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT4700-2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT95192",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700",
    "childSku": "MTB81-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT95192",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700-NOEZ",
    "childSku": "MTB81-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "M1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "M1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT0850",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-M700EZ",
    "childSku": "MTB81-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MTB31-00",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MX1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MX1001",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MX1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400",
    "childSku": "MX1003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MTB31-00",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MX1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MX1001",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MX1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX400-NOEZ",
    "childSku": "MX1003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MTB31-00",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MX1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MX1001",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MX1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500",
    "childSku": "MX1003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MTB31-00",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MX1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MX1001",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MX1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500-NOEZ",
    "childSku": "MX1003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT0865",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT95016A",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MTB31-00",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MX1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MX1001",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MX1002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-MX500EZ",
    "childSku": "MX1003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR5.12",
    "qtyPer": 8
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 8
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT7400",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S400-NOEZ",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR5.12",
    "qtyPer": 8
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 8
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MT95195",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500-NOEZ",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0825",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT7500",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S500EZ",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR5.12",
    "qtyPer": 8
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MT95196",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR5.12",
    "qtyPer": 8
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GRS11",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0825F",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT95192",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700-NOEZ",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "EZ100",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GRKM7681.6",
    "qtyPer": 3
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GRS3",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "GRTA-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0010",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0011",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0012",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0013",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0014",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0018",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0040",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0091",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0800",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0802",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0803",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0804",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0812",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0822",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT0870",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT4700-2",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT7700",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT9002",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT9003",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT95192",
    "qtyPer": 2
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MT95197",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "MTB45-76",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "S1000",
    "qtyPer": 1
  },
  {
    "parentSku": "GRTA-S700EZ",
    "childSku": "S1001",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "MGR5",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "MGR5",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "MGR5",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "MGR5",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "MGR5",
    "childSku": "MGR5.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5.1",
    "childSku": "MGR5.1M",
    "qtyPer": 1
  },
  {
    "parentSku": "MGR5.1",
    "childSku": "MGR5.1P",
    "qtyPer": 1
  },
  {
    "parentSku": "MT-99999",
    "childSku": "25005",
    "qtyPer": 1
  },
  {
    "parentSku": "MT-99999",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "MT-99999",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT-99999",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "MT-99999",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "MT-99999",
    "childSku": "MT0062",
    "qtyPer": 2
  },
  {
    "parentSku": "MT-99999",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "MT1000",
    "childSku": "GR0.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT1000",
    "childSku": "GR0.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT1000",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "MT1500",
    "childSku": "GR1.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT1500",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT1700",
    "childSku": "GR1.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT1700",
    "childSku": "GR2.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT2000",
    "childSku": "GR5.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT2000",
    "childSku": "GR5.3",
    "qtyPer": 2
  },
  {
    "parentSku": "MT2000",
    "childSku": "GR5.4",
    "qtyPer": 2
  },
  {
    "parentSku": "MT3400",
    "childSku": "16GR3.1 26A",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "GR0.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "GR0.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "MT3400",
    "childSku": "GR8",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "GRS15",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "GRS16",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "MT1500",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3400",
    "childSku": "MT95016A",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3500",
    "childSku": "20GR3.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3500",
    "childSku": "GR0.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3500",
    "childSku": "GR0.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3500",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "MT3500",
    "childSku": "GR8",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3500",
    "childSku": "MT1500",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3500",
    "childSku": "MT95016A",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3700",
    "childSku": "27GR3.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3700",
    "childSku": "GR0.1",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3700",
    "childSku": "GR0.2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3700",
    "childSku": "GR0.3.2",
    "qtyPer": 3
  },
  {
    "parentSku": "MT3700",
    "childSku": "GR8",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3700",
    "childSku": "MT1700",
    "qtyPer": 1
  },
  {
    "parentSku": "MT3700",
    "childSku": "MT95016B",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4004-5",
    "childSku": "MT4004",
    "qtyPer": 5
  },
  {
    "parentSku": "MT4400",
    "childSku": "BX-12",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4400",
    "childSku": "GR4.1",
    "qtyPer": 6
  },
  {
    "parentSku": "MT4400",
    "childSku": "GR4.2",
    "qtyPer": 6
  },
  {
    "parentSku": "MT4400",
    "childSku": "GR4.3",
    "qtyPer": 12
  },
  {
    "parentSku": "MT4400",
    "childSku": "GR4.4",
    "qtyPer": 12
  },
  {
    "parentSku": "MT4400",
    "childSku": "GRS12",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4400",
    "childSku": "Labor30",
    "qtyPer": 0.25
  },
  {
    "parentSku": "MT4400-2",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4400-2",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "MT4400-24",
    "childSku": "MT4400",
    "qtyPer": 24
  },
  {
    "parentSku": "MT4400-6",
    "childSku": "MT1299",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4400-6",
    "childSku": "MT4400",
    "qtyPer": 6
  },
  {
    "parentSku": "MT4402",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "MT4402",
    "childSku": "MT95015",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4450",
    "childSku": "GR4.1",
    "qtyPer": 6
  },
  {
    "parentSku": "MT4450",
    "childSku": "GR4.2",
    "qtyPer": 9
  },
  {
    "parentSku": "MT4450",
    "childSku": "GR4.3",
    "qtyPer": 12
  },
  {
    "parentSku": "MT4450",
    "childSku": "GR4.4",
    "qtyPer": 9
  },
  {
    "parentSku": "MT4450",
    "childSku": "Labor30",
    "qtyPer": 0.5
  },
  {
    "parentSku": "MT4450",
    "childSku": "MT4003",
    "qtyPer": 9
  },
  {
    "parentSku": "MT4450",
    "childSku": "MT4005",
    "qtyPer": 3
  },
  {
    "parentSku": "MT4450",
    "childSku": "MT95015B",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4500",
    "childSku": "BX-12",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4500",
    "childSku": "GR4.1",
    "qtyPer": 7
  },
  {
    "parentSku": "MT4500",
    "childSku": "GR4.2",
    "qtyPer": 7
  },
  {
    "parentSku": "MT4500",
    "childSku": "GR4.3",
    "qtyPer": 14
  },
  {
    "parentSku": "MT4500",
    "childSku": "GR4.4",
    "qtyPer": 14
  },
  {
    "parentSku": "MT4500",
    "childSku": "GRS13",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4500",
    "childSku": "Labor30",
    "qtyPer": 0.3
  },
  {
    "parentSku": "MT4500-2",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4500-2",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "MT4500-24",
    "childSku": "MT4500",
    "qtyPer": 24
  },
  {
    "parentSku": "MT4500-6",
    "childSku": "MT1299",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4500-6",
    "childSku": "MT4500",
    "qtyPer": 6
  },
  {
    "parentSku": "MT4502",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "MT4502",
    "childSku": "MT95015",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4502-25",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4502-25",
    "childSku": "MT4502",
    "qtyPer": 25
  },
  {
    "parentSku": "MT4550",
    "childSku": "GR4.1",
    "qtyPer": 8
  },
  {
    "parentSku": "MT4550",
    "childSku": "GR4.2",
    "qtyPer": 10
  },
  {
    "parentSku": "MT4550",
    "childSku": "GR4.3",
    "qtyPer": 14
  },
  {
    "parentSku": "MT4550",
    "childSku": "GR4.4",
    "qtyPer": 10
  },
  {
    "parentSku": "MT4550",
    "childSku": "Labor30",
    "qtyPer": 0.5
  },
  {
    "parentSku": "MT4550",
    "childSku": "MT4003",
    "qtyPer": 12
  },
  {
    "parentSku": "MT4550",
    "childSku": "MT4005",
    "qtyPer": 4
  },
  {
    "parentSku": "MT4550",
    "childSku": "MT95015",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4700",
    "childSku": "BX-12",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4700",
    "childSku": "GR4.1",
    "qtyPer": 10
  },
  {
    "parentSku": "MT4700",
    "childSku": "GR4.2",
    "qtyPer": 10
  },
  {
    "parentSku": "MT4700",
    "childSku": "GR4.3",
    "qtyPer": 20
  },
  {
    "parentSku": "MT4700",
    "childSku": "GR4.4",
    "qtyPer": 20
  },
  {
    "parentSku": "MT4700",
    "childSku": "GRS14",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4700",
    "childSku": "Labor30",
    "qtyPer": 0.35
  },
  {
    "parentSku": "MT4700-2",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4700-2",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "MT4700-24",
    "childSku": "MT4700",
    "qtyPer": 24
  },
  {
    "parentSku": "MT4700-6",
    "childSku": "MT1299",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4700-6",
    "childSku": "MT4700",
    "qtyPer": 6
  },
  {
    "parentSku": "MT4702",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "MT4702",
    "childSku": "MT95015",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4702-25",
    "childSku": "BX-4",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4702-25",
    "childSku": "MT4702",
    "qtyPer": 25
  },
  {
    "parentSku": "MT4730",
    "childSku": "GR4.1",
    "qtyPer": 15
  },
  {
    "parentSku": "MT4730",
    "childSku": "GR4.2",
    "qtyPer": 15
  },
  {
    "parentSku": "MT4730",
    "childSku": "GR4.3.3",
    "qtyPer": 30
  },
  {
    "parentSku": "MT4730",
    "childSku": "GR4.4",
    "qtyPer": 30
  },
  {
    "parentSku": "MT4730",
    "childSku": "Labor30",
    "qtyPer": 0.75
  },
  {
    "parentSku": "MT4730",
    "childSku": "MT4003",
    "qtyPer": 30
  },
  {
    "parentSku": "MT4730",
    "childSku": "MT95015",
    "qtyPer": 1
  },
  {
    "parentSku": "MT4750",
    "childSku": "GR4.1",
    "qtyPer": 15
  },
  {
    "parentSku": "MT4750",
    "childSku": "GR4.2",
    "qtyPer": 10
  },
  {
    "parentSku": "MT4750",
    "childSku": "GR4.3",
    "qtyPer": 20
  },
  {
    "parentSku": "MT4750",
    "childSku": "GR4.4",
    "qtyPer": 15
  },
  {
    "parentSku": "MT4750",
    "childSku": "Labor30",
    "qtyPer": 0.5
  },
  {
    "parentSku": "MT4750",
    "childSku": "MT4002",
    "qtyPer": 5
  },
  {
    "parentSku": "MT4750",
    "childSku": "MT95015",
    "qtyPer": 1
  },
  {
    "parentSku": "MT5000-MAK",
    "childSku": "GR MISC",
    "qtyPer": 20
  },
  {
    "parentSku": "MT5000-MAK",
    "childSku": "MT9990L",
    "qtyPer": 1
  },
  {
    "parentSku": "MT5000-MAK",
    "childSku": "MT9990R",
    "qtyPer": 1
  },
  {
    "parentSku": "MT5000-MAK",
    "childSku": "MT9991",
    "qtyPer": 1
  },
  {
    "parentSku": "MT5000-MAK",
    "childSku": "MT9992",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-2-4",
    "childSku": "MT7208-2",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-2-4",
    "childSku": "MT7208-3",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-2-4",
    "childSku": "MT7208-4",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-25",
    "qtyPer": 4
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-26",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-27",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-28",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-29",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-30",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-31",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-32",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-33",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-34",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-35",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-25-36",
    "childSku": "MT7208-36",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-5-7",
    "childSku": "MT7208-5",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-5-7",
    "childSku": "MT7208-6",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-5-7",
    "childSku": "MT7208-7",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-54-58",
    "childSku": "MT7208-54",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-54-58",
    "childSku": "MT7208-55",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-54-58",
    "childSku": "MT7208-56",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-54-58",
    "childSku": "MT7208-57",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-54-58",
    "childSku": "MT7208-58",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-61-63",
    "childSku": "MT7208-61",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-61-63",
    "childSku": "MT7208-62",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-61-63",
    "childSku": "MT7208-63",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-8-12",
    "childSku": "MT7208-10",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-8-12",
    "childSku": "MT7208-11",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-8-12",
    "childSku": "MT7208-12",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-8-12",
    "childSku": "MT7208-8",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-8-12",
    "childSku": "MT7208-9",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-14",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-18",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-19",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-20",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-23",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-24",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-42",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-6",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-7",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7208-FTASSY",
    "childSku": "MT7208-8-12",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7400",
    "childSku": "MT7401",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7400",
    "childSku": "MT7502",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7500",
    "childSku": "MT7501",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7500",
    "childSku": "MT7502",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7700",
    "childSku": "MT7701",
    "qtyPer": 1
  },
  {
    "parentSku": "MT7700",
    "childSku": "MT7702",
    "qtyPer": 1
  },
  {
    "parentSku": "MT8000",
    "childSku": "GR5.11",
    "qtyPer": 6
  },
  {
    "parentSku": "MT8000",
    "childSku": "GR5.12",
    "qtyPer": 6
  },
  {
    "parentSku": "MT8000",
    "childSku": "GR5.8",
    "qtyPer": 6
  },
  {
    "parentSku": "MT8000",
    "childSku": "GRS17",
    "qtyPer": 1
  },
  {
    "parentSku": "MT8000",
    "childSku": "MT8001",
    "qtyPer": 1
  },
  {
    "parentSku": "MT8000",
    "childSku": "MT8002",
    "qtyPer": 1
  },
  {
    "parentSku": "MT8000",
    "childSku": "MT8003",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP400",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP400",
    "childSku": "MT1500",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP400",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP400",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "MTRIP400",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP500",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP500",
    "childSku": "MT1500",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP500",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP500",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "MTRIP500",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP616",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP616",
    "childSku": "MT1500",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP616",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP616",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "MTRIP616",
    "childSku": "MT9601",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP616",
    "childSku": "MTB61-00",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP620",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP620",
    "childSku": "MT1500",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP620",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP620",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "MTRIP620",
    "childSku": "MT9601",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP620",
    "childSku": "MTB61-00",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP700",
    "childSku": "MT10105",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP700",
    "childSku": "MT1700",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP700",
    "childSku": "MT4004",
    "qtyPer": 1
  },
  {
    "parentSku": "MTRIP700",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "MTRIP700",
    "childSku": "MT9001",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK16",
    "childSku": "MT24124",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK16",
    "childSku": "MT3400",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK16",
    "childSku": "MT4400",
    "qtyPer": 2
  },
  {
    "parentSku": "MTSMK20",
    "childSku": "MT24124",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK20",
    "childSku": "MT3500",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK20",
    "childSku": "MT4500",
    "qtyPer": 2
  },
  {
    "parentSku": "MTSMK27",
    "childSku": "MT361004",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK27",
    "childSku": "MT3700",
    "qtyPer": 1
  },
  {
    "parentSku": "MTSMK27",
    "childSku": "MT4700",
    "qtyPer": 2
  },
  {
    "parentSku": "MX2000",
    "childSku": "MTB31-00",
    "qtyPer": 1
  },
  {
    "parentSku": "MX2000",
    "childSku": "MX1001",
    "qtyPer": 2
  },
  {
    "parentSku": "MX2000",
    "childSku": "MX1002",
    "qtyPer": 1
  },
  {
    "parentSku": "MX2000",
    "childSku": "MX1003",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0240",
    "childSku": "SB0108",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0240",
    "childSku": "SB0109",
    "qtyPer": 0.025
  },
  {
    "parentSku": "SB0240",
    "childSku": "SB3803",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0240",
    "childSku": "SB3820",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "Labor30",
    "qtyPer": 5
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0101",
    "qtyPer": 0.05
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0102",
    "qtyPer": 0.125
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0103",
    "qtyPer": 0.01695
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0104",
    "qtyPer": 0.052632
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0105",
    "qtyPer": 0.035715
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0107",
    "qtyPer": 0.0625
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0110",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0111",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0112",
    "qtyPer": 0.111112
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0113",
    "qtyPer": 0.111112
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0114",
    "qtyPer": 2
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0120",
    "qtyPer": 0.0083
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0240",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB0250P",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB2150",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB2151",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0250",
    "childSku": "SB2152",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0900",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0900",
    "childSku": "PD-1000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB0900",
    "childSku": "SB0102",
    "qtyPer": 0.1
  },
  {
    "parentSku": "SB0900",
    "childSku": "SB0119",
    "qtyPer": 0.079167
  },
  {
    "parentSku": "SB0900",
    "childSku": "SB0120",
    "qtyPer": 0.116667
  },
  {
    "parentSku": "SB1250*",
    "childSku": "Labor30",
    "qtyPer": 0.25
  },
  {
    "parentSku": "SB1250*",
    "childSku": "SB0118",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SB0300",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215",
    "childSku": "SB121",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SB122",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215",
    "childSku": "SB1425",
    "qtyPer": 3
  },
  {
    "parentSku": "SB215",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SB215",
    "childSku": "SB38010",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215",
    "childSku": "SB3807",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "141S89-4",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "327C19-5",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "GRKM61.8",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "MT0840",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "MT0865",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB122",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB123",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB1280",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB3803",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB3820",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB121",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB122",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB123",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB1250",
    "qtyPer": 8
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB3601",
    "qtyPer": 8
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB215e-NM",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SB0300",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SB121",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SB122",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216",
    "childSku": "SB1425",
    "qtyPer": 3
  },
  {
    "parentSku": "SB216",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB216",
    "childSku": "SB38010",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216",
    "childSku": "SB3803",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216",
    "childSku": "SB3807",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216",
    "childSku": "SB3822",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "141S89-4",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "327C19-5",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "GRKM61.8",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "MT0840",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "MT0865",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB122",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB123",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB1280",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB3803",
    "qtyPer": 7
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB3820",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB3822",
    "qtyPer": 2
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB216e-NM",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB3200",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "SB3200",
    "childSku": "SB0107",
    "qtyPer": 0.016667
  },
  {
    "parentSku": "SB3200",
    "childSku": "SB0115",
    "qtyPer": 0.134
  },
  {
    "parentSku": "SB3200",
    "childSku": "SB0116",
    "qtyPer": 0.005
  },
  {
    "parentSku": "SB3200",
    "childSku": "SB3803",
    "qtyPer": 1
  },
  {
    "parentSku": "SB3200",
    "childSku": "SB3820",
    "qtyPer": 1
  },
  {
    "parentSku": "SB3600",
    "childSku": "SB1250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB3600",
    "childSku": "SB3601",
    "qtyPer": 1
  },
  {
    "parentSku": "SB3601",
    "childSku": "Labor30",
    "qtyPer": 0.25
  },
  {
    "parentSku": "SB3601",
    "childSku": "SB0108",
    "qtyPer": 0.166667
  },
  {
    "parentSku": "SB431",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB0300",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431",
    "childSku": "SB121",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB122",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431",
    "childSku": "SB1425",
    "qtyPer": 3
  },
  {
    "parentSku": "SB431",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB431",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SB431",
    "childSku": "SB38010",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431",
    "childSku": "SB3803",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431",
    "childSku": "SB3807",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431",
    "childSku": "SB3822",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB122",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB3803",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB3822",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431-AB",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "141S89-4",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "327C19-5",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "GR-LIT-WP",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "GRKM61.8",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "MT0004",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "MT0099",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "MT0840",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "MT0865",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e",
    "childSku": "MTSPWRENCH",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB-LIT-OM",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB122",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB1280",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB3803",
    "qtyPer": 4
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB3820",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB3822",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e",
    "childSku": "SBBOX2",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SB431e-NM",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB0112",
    "qtyPer": 0.1145
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB123",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB1250",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB2150",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB2151",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB2152",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB3803",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB3825",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9000",
    "childSku": "SB9050",
    "qtyPer": 1
  },
  {
    "parentSku": "SB9050",
    "childSku": "Labor30",
    "qtyPer": 0.25
  },
  {
    "parentSku": "SB9050",
    "childSku": "SB0108",
    "qtyPer": 0.027778
  },
  {
    "parentSku": "SBCK215",
    "childSku": "MT48126",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK215",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SBCK215",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK215",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SBCK215",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK215",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK216",
    "childSku": "MT48126",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK216",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK216",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SBCK216",
    "childSku": "SB3803",
    "qtyPer": 2
  },
  {
    "parentSku": "SBCK216",
    "childSku": "SB3822",
    "qtyPer": 2
  },
  {
    "parentSku": "SBCK216",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBCK216",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "GREB400-MAK-NM",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4215e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "GREB400-MAK-NM",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4216e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "GREB400-MAK-NM",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "Labor30",
    "qtyPer": 1.5
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-4431e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "GREB500-MAK-NM",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5215e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "GREB500-MAK-NM",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "Labor30",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5216e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "GGD01M1",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "GREB500-MAK-NM",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "Labor30",
    "qtyPer": 1.5
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "MT8008",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB0250",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB1000",
    "qtyPer": 2
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB1500",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB2000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB3200",
    "qtyPer": 3
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB3600",
    "qtyPer": 8
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB4000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB9000",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB9100",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SB9200",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SBACCBAG",
    "qtyPer": 1
  },
  {
    "parentSku": "SBGR-5431e",
    "childSku": "SBBOX1",
    "qtyPer": 1
  }
];
}
