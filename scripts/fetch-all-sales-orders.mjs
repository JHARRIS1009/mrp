import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import { zohoGet } from "../lib/zoho/client.ts";

const allSalesOrders = [];
let page = 1;

while (true) {
  console.log(`Fetching sales orders page ${page}...`);

  const data = await zohoGet("/salesorders", {
    page,
    per_page: 200,
  });

  allSalesOrders.push(...(data.salesorders ?? []));

  if (!data.page_context?.has_more_page) break;

  page += 1;
}

writeFileSync(
  "zoho-sales-orders-raw.json",
  JSON.stringify(allSalesOrders, null, 2)
);

console.log(`Saved ${allSalesOrders.length} sales orders to zoho-sales-orders-raw.json`);