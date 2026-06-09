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
    "orderNumber": "SO-2600006",
    "customerName": "Taylor Goodwin",
    "sku": "GR727",
    "quantity": 1,
    "dueDate": "2026-01-06"
  },
  {
    "orderNumber": "SO-2600014",
    "customerName": "William Casey",
    "sku": "MT9001",
    "quantity": 2,
    "dueDate": "2026-01-06"
  },
  {
    "orderNumber": "SO-2600021",
    "customerName": "Katrina Gaut",
    "sku": "MT4550",
    "quantity": 1,
    "dueDate": "2026-01-07"
  },
  {
    "orderNumber": "SO-2600024",
    "customerName": "ScotchBoy Landscaping",
    "sku": "MT4700",
    "quantity": 2,
    "dueDate": "2026-01-07"
  },
  {
    "orderNumber": "SO-2600050",
    "customerName": "VANDEN BUSSCHE CONCORD",
    "sku": "MTRIP400",
    "quantity": 1,
    "dueDate": "2026-01-14"
  },
  {
    "orderNumber": "SO-2600076",
    "customerName": "Royal Plus Electric",
    "sku": "MT4700",
    "quantity": 2,
    "dueDate": "2026-01-20"
  },
  {
    "orderNumber": "SO-2600092",
    "customerName": "William Casey",
    "sku": "MT1500",
    "quantity": 2,
    "dueDate": "2026-01-23"
  },
  {
    "orderNumber": "SO-2600102",
    "customerName": "Deep Cable Corporation",
    "sku": "Labor30",
    "quantity": 1,
    "dueDate": "2026-01-28"
  },
  {
    "orderNumber": "SO-2600130",
    "customerName": "Jtozelectric LLC",
    "sku": "GR416",
    "quantity": 1,
    "dueDate": "2026-02-05"
  },
  {
    "orderNumber": "SO-2600188",
    "customerName": "Big A's Irrigation",
    "sku": "GR416",
    "quantity": 1,
    "dueDate": "2026-02-19"
  },
  {
    "orderNumber": "SO-2600188",
    "customerName": "Big A's Irrigation",
    "sku": "MT4400",
    "quantity": 1,
    "dueDate": "2026-02-19"
  },
  {
    "orderNumber": "SO-2600189",
    "customerName": "WLM",
    "sku": "MT2000",
    "quantity": 1,
    "dueDate": "2026-02-19"
  },
  {
    "orderNumber": "SO-2600189",
    "customerName": "WLM",
    "sku": "MT9601",
    "quantity": 1,
    "dueDate": "2026-02-19"
  },
  {
    "orderNumber": "SO-2600196",
    "customerName": "Justin Wojciechowski",
    "sku": "MT4700",
    "quantity": 2,
    "dueDate": "2026-02-25"
  },
  {
    "orderNumber": "SO-2600203",
    "customerName": "Lindsey Poppas",
    "sku": "MT4500",
    "quantity": 2,
    "dueDate": "2026-02-20"
  },
  {
    "orderNumber": "SO-2600223",
    "customerName": "Jensen Irrigation",
    "sku": "MT4500",
    "quantity": 2,
    "dueDate": "2026-02-27"
  },
  {
    "orderNumber": "SO-2600226",
    "customerName": "Dorian Drake International",
    "sku": "12390517832343283765",
    "quantity": 1,
    "dueDate": "2026-03-04"
  },
  {
    "orderNumber": "SO-2600226",
    "customerName": "Dorian Drake International",
    "sku": "12390517832343283765",
    "quantity": 1,
    "dueDate": "2026-03-04"
  },
  {
    "orderNumber": "SO-2600236",
    "customerName": "Jake Zuydendorp",
    "sku": "MT9601",
    "quantity": 1,
    "dueDate": "2026-02-27"
  },
  {
    "orderNumber": "SO-2600240",
    "customerName": "Archi's cleaning LLC",
    "sku": "MTRIP400",
    "quantity": 1,
    "dueDate": "2026-03-05"
  },
  {
    "orderNumber": "SO-2600246",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "Labor30",
    "quantity": 2,
    "dueDate": "2026-02-27"
  },
  {
    "orderNumber": "SO-2600268",
    "customerName": "Chad Whittaker",
    "sku": "MT1500",
    "quantity": 1,
    "dueDate": "2026-03-10"
  },
  {
    "orderNumber": "SO-2600273",
    "customerName": "Witt Mechanical Inc.",
    "sku": "GR727",
    "quantity": 1,
    "dueDate": "2026-03-06"
  },
  {
    "orderNumber": "SO-2600276",
    "customerName": "Modernize Power",
    "sku": "GR727",
    "quantity": 1,
    "dueDate": "2026-04-29"
  },
  {
    "orderNumber": "SO-2600290",
    "customerName": "CS Contract Solutions",
    "sku": "MT2000",
    "quantity": 1,
    "dueDate": "2026-03-12"
  },
  {
    "orderNumber": "SO-2600290",
    "customerName": "CS Contract Solutions",
    "sku": "MTRIP400",
    "quantity": 1,
    "dueDate": "2026-03-12"
  },
  {
    "orderNumber": "SO-2600316",
    "customerName": "Jorge Gonzalez",
    "sku": "MT3500",
    "quantity": 1,
    "dueDate": "2026-03-12"
  },
  {
    "orderNumber": "SO-2600330",
    "customerName": "Grinders",
    "sku": "MTRIP400",
    "quantity": 1,
    "dueDate": "2026-03-18"
  },
  {
    "orderNumber": "SO-2600332",
    "customerName": "RK Irrigation LLC",
    "sku": "MTRIP620",
    "quantity": 1,
    "dueDate": "2026-03-18"
  },
  {
    "orderNumber": "SO-2600333",
    "customerName": "Ward Electrical LLC",
    "sku": "MTRIP700",
    "quantity": 1,
    "dueDate": "2026-03-18"
  },
  {
    "orderNumber": "SO-2600348",
    "customerName": "Millbrook Lawn Sprinklers LLC",
    "sku": "MTRIP620",
    "quantity": 1,
    "dueDate": "2026-03-17"
  },
  {
    "orderNumber": "SO-2600375",
    "customerName": "Paradise Outdoors",
    "sku": "Labor30",
    "quantity": 1,
    "dueDate": "2026-03-20"
  },
  {
    "orderNumber": "SO-2600393",
    "customerName": "Brian Rose",
    "sku": "35749883712690250239",
    "quantity": 2,
    "dueDate": "2026-03-30"
  },
  {
    "orderNumber": "SO-2600445",
    "customerName": "Dorian Drake International",
    "sku": "MT9001",
    "quantity": 12,
    "dueDate": "2026-03-30"
  },
  {
    "orderNumber": "SO-2600547",
    "customerName": "Abbey Tool & Party Rent All",
    "sku": "GR416",
    "quantity": 2,
    "dueDate": "2026-05-04"
  },
  {
    "orderNumber": "SO-2600621",
    "customerName": "Amazon.com",
    "sku": "GR416",
    "quantity": 1,
    "dueDate": "2026-04-22"
  },
  {
    "orderNumber": "SO-2600662",
    "customerName": "Acme Tools",
    "sku": "MT4500",
    "quantity": 2,
    "dueDate": "2026-04-30"
  },
  {
    "orderNumber": "SO-2600716",
    "customerName": "Great Northern Equipment",
    "sku": "BX-4",
    "quantity": 2,
    "dueDate": "2026-06-26"
  },
  {
    "orderNumber": "SO-2600716",
    "customerName": "Great Northern Equipment",
    "sku": "EZ100",
    "quantity": 5,
    "dueDate": "2026-06-26"
  },
  {
    "orderNumber": "SO-2600716",
    "customerName": "Great Northern Equipment",
    "sku": "GR727",
    "quantity": 10,
    "dueDate": "2026-06-26"
  },
  {
    "orderNumber": "SO-2600716",
    "customerName": "Great Northern Equipment",
    "sku": "MT8000",
    "quantity": 3,
    "dueDate": "2026-06-26"
  },
  {
    "orderNumber": "SO-2600716",
    "customerName": "Great Northern Equipment",
    "sku": "MTB61-00",
    "quantity": 2,
    "dueDate": "2026-06-26"
  },
  {
    "orderNumber": "SO-2600737",
    "customerName": "Acme Tools",
    "sku": "MT4400",
    "quantity": 8,
    "dueDate": "2026-05-07"
  },
  {
    "orderNumber": "SO-2600737",
    "customerName": "Acme Tools",
    "sku": "MTSMK16",
    "quantity": 4,
    "dueDate": "2026-05-07"
  },
  {
    "orderNumber": "SO-2600737",
    "customerName": "Acme Tools",
    "sku": "MTSMK27",
    "quantity": 5,
    "dueDate": "2026-05-07"
  },
  {
    "orderNumber": "SO-2600740",
    "customerName": "Wetscape",
    "sku": "MT9601",
    "quantity": 1,
    "dueDate": "2026-05-07"
  },
  {
    "orderNumber": "SO-2600742",
    "customerName": "Goldenrule Propane LLC.",
    "sku": "MT4500",
    "quantity": 2,
    "dueDate": "2026-05-06"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "GR520",
    "quantity": 7,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "GR520",
    "quantity": 1,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "GR727",
    "quantity": 1,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MT1500",
    "quantity": 4,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MT2000",
    "quantity": 2,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MT3500",
    "quantity": 2,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MT4500",
    "quantity": 20,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MT9001",
    "quantity": 4,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MT9601",
    "quantity": 2,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "MTB81-00",
    "quantity": 2,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "SB242SBD",
    "quantity": 1,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600752",
    "customerName": "Reinders, Inc.",
    "sku": "SB431",
    "quantity": 1,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600791",
    "customerName": "LOR Irrigations",
    "sku": "MTRIP620",
    "quantity": 1,
    "dueDate": "2026-05-12"
  },
  {
    "orderNumber": "SO-2600827",
    "customerName": "Central Pro Supply",
    "sku": "GR416",
    "quantity": 1,
    "dueDate": "2026-05-15"
  },
  {
    "orderNumber": "SO-2600827",
    "customerName": "Central Pro Supply",
    "sku": "GR520",
    "quantity": 5,
    "dueDate": "2026-05-15"
  },
  {
    "orderNumber": "SO-2600827",
    "customerName": "Central Pro Supply",
    "sku": "MT4500",
    "quantity": 5,
    "dueDate": "2026-05-15"
  },
  {
    "orderNumber": "SO-2600859",
    "customerName": "Dorian Drake International",
    "sku": "GR416",
    "quantity": 1,
    "dueDate": "2026-06-15"
  },
  {
    "orderNumber": "SO-2600859",
    "customerName": "Dorian Drake International",
    "sku": "GR520",
    "quantity": 2,
    "dueDate": "2026-06-15"
  },
  {
    "orderNumber": "SO-2600864",
    "customerName": "Light Wave Legion",
    "sku": "Labor30",
    "quantity": 1,
    "dueDate": "2026-05-19"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "H1001",
    "quantity": 10,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "H1002",
    "quantity": 5,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT1000",
    "quantity": 5,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT1500",
    "quantity": 10,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT1700",
    "quantity": 10,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT2000",
    "quantity": 5,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT4500",
    "quantity": 20,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT4700",
    "quantity": 20,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-109",
    "quantity": 10,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-74",
    "quantity": 10,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT9001",
    "quantity": 20,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT9002",
    "quantity": 5,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MT9003",
    "quantity": 5,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "MTB72-00",
    "quantity": 10,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600871",
    "customerName": "Dorian Drake International",
    "sku": "S1001",
    "quantity": 1,
    "dueDate": "2026-06-09"
  },
  {
    "orderNumber": "SO-2600873",
    "customerName": "A Plus Generators",
    "sku": "MT7208-84",
    "quantity": 1,
    "dueDate": "2026-05-19"
  },
  {
    "orderNumber": "SO-2600873",
    "customerName": "A Plus Generators",
    "sku": "MT7208-85",
    "quantity": 1,
    "dueDate": "2026-05-19"
  },
  {
    "orderNumber": "SO-2600881",
    "customerName": "Central Pro Supply",
    "sku": "GR520",
    "quantity": 2,
    "dueDate": "2026-05-21"
  },
  {
    "orderNumber": "SO-2600901",
    "customerName": "Safety Test & Equipment CO.",
    "sku": "GRTA-S500-NOEZ",
    "quantity": 4,
    "dueDate": "2026-06-04"
  },
  {
    "orderNumber": "SO-2600901",
    "customerName": "Safety Test & Equipment CO.",
    "sku": "MTSMK20",
    "quantity": 4,
    "dueDate": "2026-06-04"
  },
  {
    "orderNumber": "SO-2600911",
    "customerName": "Dorian Drake International",
    "sku": "EZ100",
    "quantity": 1,
    "dueDate": "2026-07-03"
  },
  {
    "orderNumber": "SO-2600911",
    "customerName": "Dorian Drake International",
    "sku": "GRTA-H700",
    "quantity": 1,
    "dueDate": "2026-07-03"
  },
  {
    "orderNumber": "SO-2600911",
    "customerName": "Dorian Drake International",
    "sku": "H1001",
    "quantity": 2,
    "dueDate": "2026-07-03"
  },
  {
    "orderNumber": "SO-2600911",
    "customerName": "Dorian Drake International",
    "sku": "H1002",
    "quantity": 2,
    "dueDate": "2026-07-03"
  },
  {
    "orderNumber": "SO-2600911",
    "customerName": "Dorian Drake International",
    "sku": "MTB77-00",
    "quantity": 5,
    "dueDate": "2026-07-03"
  },
  {
    "orderNumber": "SO-2600911",
    "customerName": "Dorian Drake International",
    "sku": "MTB97-00",
    "quantity": 5,
    "dueDate": "2026-07-03"
  },
  {
    "orderNumber": "SO-2600914",
    "customerName": "DBC Irrigation Supply",
    "sku": "EZ100",
    "quantity": 5,
    "dueDate": "2026-06-19"
  },
  {
    "orderNumber": "SO-2600914",
    "customerName": "DBC Irrigation Supply",
    "sku": "GR520",
    "quantity": 1,
    "dueDate": "2026-06-19"
  },
  {
    "orderNumber": "SO-2600914",
    "customerName": "DBC Irrigation Supply",
    "sku": "GR520",
    "quantity": 10,
    "dueDate": "2026-06-19"
  },
  {
    "orderNumber": "SO-2600914",
    "customerName": "DBC Irrigation Supply",
    "sku": "GR727-NOEZ",
    "quantity": 1,
    "dueDate": "2026-06-19"
  },
  {
    "orderNumber": "SO-2600929",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-25-36",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600929",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-41",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600929",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-74",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600929",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-75",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600929",
    "customerName": "Dorian Drake International",
    "sku": "MT7208-85",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600929",
    "customerName": "Dorian Drake International",
    "sku": "MTRIP500",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600934",
    "customerName": "Acme Tools",
    "sku": "GR416",
    "quantity": 2,
    "dueDate": "2026-05-26"
  },
  {
    "orderNumber": "SO-2600934",
    "customerName": "Acme Tools",
    "sku": "GRTA-S500",
    "quantity": 2,
    "dueDate": "2026-05-26"
  },
  {
    "orderNumber": "SO-2600934",
    "customerName": "Acme Tools",
    "sku": "SB216",
    "quantity": 2,
    "dueDate": "2026-05-26"
  },
  {
    "orderNumber": "SO-2600934",
    "customerName": "Acme Tools",
    "sku": "SB242SBD",
    "quantity": 2,
    "dueDate": "2026-05-26"
  },
  {
    "orderNumber": "SO-2600940",
    "customerName": "Acme Tools",
    "sku": "GRTA-S500",
    "quantity": 1,
    "dueDate": "2026-06-10"
  },
  {
    "orderNumber": "SO-2600940",
    "customerName": "Acme Tools",
    "sku": "SB215",
    "quantity": 1,
    "dueDate": "2026-06-10"
  },
  {
    "orderNumber": "SO-2600940",
    "customerName": "Acme Tools",
    "sku": "SB216",
    "quantity": 2,
    "dueDate": "2026-06-10"
  },
  {
    "orderNumber": "SO-2600940",
    "customerName": "Acme Tools",
    "sku": "SB4000",
    "quantity": 1,
    "dueDate": "2026-06-10"
  },
  {
    "orderNumber": "SO-2600943",
    "customerName": "Great Northern Equipment",
    "sku": "EZ100",
    "quantity": 10,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600943",
    "customerName": "Great Northern Equipment",
    "sku": "GR727",
    "quantity": 10,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600943",
    "customerName": "Great Northern Equipment",
    "sku": "GRTA-H500",
    "quantity": 2,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600977",
    "customerName": "Canby Rental & Equipment",
    "sku": "MT0014",
    "quantity": 2,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600977",
    "customerName": "Canby Rental & Equipment",
    "sku": "MT2000",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600977",
    "customerName": "Canby Rental & Equipment",
    "sku": "MT8000",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600977",
    "customerName": "Canby Rental & Equipment",
    "sku": "MT9001",
    "quantity": 1,
    "dueDate": "2026-06-02"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "166106-5",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "168652-4",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "198172-4",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "222174-9",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "318722-1",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "346457-4",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "442165-6",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "455559-6",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "455936-2",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "GRKM7681.6",
    "quantity": 2,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "Labor30",
    "quantity": 2,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "MT0062",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "MT0800",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "MT0825F",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "MT0865",
    "quantity": 2,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "MT4500",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600978",
    "customerName": "Total Safety, Supplies & Solutions",
    "sku": "MTB45-76",
    "quantity": 1,
    "dueDate": "2026-06-01"
  },
  {
    "orderNumber": "SO-2600980",
    "customerName": "Heritage Landscape Supply Group",
    "sku": "GR727",
    "quantity": 1,
    "dueDate": "2026-06-30"
  },
  {
    "orderNumber": "SO-2600986",
    "customerName": "Turf Equipment and Supply Co.",
    "sku": "MT4500",
    "quantity": 2,
    "dueDate": "2026-06-04"
  },
  {
    "orderNumber": "SO-2600986",
    "customerName": "Turf Equipment and Supply Co.",
    "sku": "MT95015B",
    "quantity": 1,
    "dueDate": "2026-06-04"
  },
  {
    "orderNumber": "SO-2600988",
    "customerName": "Reinders, Inc.",
    "sku": "MTB81-00",
    "quantity": 1,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-BLHAT",
    "quantity": 3,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-BNHAT",
    "quantity": 3,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-LIT-BAN",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-LIT-TASP",
    "quantity": 200,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-LIT-TB",
    "quantity": 200,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-LIT-TBSP",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "GR-LIT-TBTA",
    "quantity": 200,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "MT-BLHAT",
    "quantity": 4,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "MT-BNHAT",
    "quantity": 4,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "SB-BLHAT",
    "quantity": 3,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "SB-BNHAT",
    "quantity": 3,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "SB-LIT-TB",
    "quantity": 200,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600989",
    "customerName": "MiniTrencher House Acct",
    "sku": "SB-LIT-TBSP",
    "quantity": 200,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "GR-LIT-BAN",
    "quantity": 1,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "GR-LIT-TB",
    "quantity": 25,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "GR-LIT-TBTA",
    "quantity": 25,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "H1001",
    "quantity": 1,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "MT0062",
    "quantity": 2,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "MT0800",
    "quantity": 2,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "MT0825F",
    "quantity": 2,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "MT9002",
    "quantity": 1,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600990",
    "customerName": "Central Pro Supply",
    "sku": "SB-LIT-TB",
    "quantity": 25,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600991",
    "customerName": "Heritage Landscape Supply Group",
    "sku": "GR416",
    "quantity": 1,
    "dueDate": "2026-06-03"
  },
  {
    "orderNumber": "SO-2600993",
    "customerName": "Manchester Tool Repair",
    "sku": "MTRIP620",
    "quantity": 2,
    "dueDate": "2026-06-08"
  },
  {
    "orderNumber": "SO-2600995",
    "customerName": "LGT Irrigation",
    "sku": "MT3500",
    "quantity": 1,
    "dueDate": "2026-06-04"
  },
  {
    "orderNumber": "SO-2600999",
    "customerName": "Dorian Drake International",
    "sku": "GR520",
    "quantity": 4,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600999",
    "customerName": "Dorian Drake International",
    "sku": "GRTA-H500-NOEZ",
    "quantity": 2,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600999",
    "customerName": "Dorian Drake International",
    "sku": "GRTA-S500-NOEZ",
    "quantity": 2,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2600999",
    "customerName": "Dorian Drake International",
    "sku": "MT1500",
    "quantity": 3,
    "dueDate": "2026-07-01"
  },
  {
    "orderNumber": "SO-2601000",
    "customerName": "Ewing Outdoor Supply",
    "sku": "GR520",
    "quantity": 1,
    "dueDate": "2026-06-04"
  },
  {
    "orderNumber": "SO-2601004",
    "customerName": "Grinders",
    "sku": "MTSMK16",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601005",
    "customerName": "Reinders, Inc.",
    "sku": "GR520",
    "quantity": 8,
    "dueDate": "2026-06-12"
  },
  {
    "orderNumber": "SO-2601006",
    "customerName": "Brandon Gillespie",
    "sku": "MT7208-74",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601006",
    "customerName": "Brandon Gillespie",
    "sku": "MT7208-85",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601007",
    "customerName": "Richard's Landscape and Irrigation",
    "sku": "MT3400",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601007",
    "customerName": "Richard's Landscape and Irrigation",
    "sku": "MT3400",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601008",
    "customerName": "Joel Elstein",
    "sku": "MT10105",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601008",
    "customerName": "Joel Elstein",
    "sku": "MT7208-25-36",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "GRTA-H700",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "H1001",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "H1001",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "MT0062",
    "quantity": 2,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "MT0800",
    "quantity": 2,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "MT0825F",
    "quantity": 2,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "MT9002",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "MTB77-00",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601009",
    "customerName": "North Florida Bamboo",
    "sku": "MTB77-00",
    "quantity": 1,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601010",
    "customerName": "Windham Rental Center",
    "sku": "MT1500",
    "quantity": 2,
    "dueDate": "2026-06-05"
  },
  {
    "orderNumber": "SO-2601011",
    "customerName": "Perma-Culture, Inc.",
    "sku": "GR520",
    "quantity": 1,
    "dueDate": "2026-06-08"
  },
  {
    "orderNumber": "SO-2601012",
    "customerName": "Landvision Designs Inc",
    "sku": "GRTA-S500-NOEZ",
    "quantity": 1,
    "dueDate": "2026-06-08"
  },
  {
    "orderNumber": "SO-2601014",
    "customerName": "Dorian Drake International",
    "sku": "GR-LIT-TB",
    "quantity": 50,
    "dueDate": "2026-06-08"
  },
  {
    "orderNumber": "SO-2601014",
    "customerName": "Dorian Drake International",
    "sku": "GReB-LIT-TB",
    "quantity": 50,
    "dueDate": "2026-06-08"
  },
  {
    "orderNumber": "SO-2601014",
    "customerName": "Dorian Drake International",
    "sku": "SB-LIT-TB",
    "quantity": 50,
    "dueDate": "2026-06-08"
  },
  {
    "orderNumber": "SO-2601015",
    "customerName": "Todd's Services Inc",
    "sku": "MT1700",
    "quantity": 1,
    "dueDate": "2026-06-08"
  }
];
}

export async function getDemandItemsByOrderNumber(orderNumber: string) {
  const demandItems = await getDemandItems();

  return demandItems.filter((item) => item.orderNumber === orderNumber);
}
