import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { writeFileSync } from "node:fs";
import { zohoGet } from "../../lib/zoho/client.ts";

const data = await zohoGet("/items", {
  page: 1,
  per_page: 5,
});

writeFileSync("debug-zoho-items.json", JSON.stringify(data, null, 2));

console.log("Wrote debug-zoho-items.json");