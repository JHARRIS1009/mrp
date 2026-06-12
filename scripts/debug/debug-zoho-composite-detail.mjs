import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import { zohoGet } from "../../lib/zoho/client.ts";

const compositeItemId = "6212012000000444914";

const data = await zohoGet(`/compositeitems/${compositeItemId}`);

writeFileSync(
  "debug-zoho-composite-detail.json",
  JSON.stringify(data, null, 2)
);

console.log("Wrote debug-zoho-composite-detail.json");