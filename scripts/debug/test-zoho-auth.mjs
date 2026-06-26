import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

console.log({
  hasClientId: !!process.env.ZOHO_CLIENT_ID,
  hasClientSecret: !!process.env.ZOHO_CLIENT_SECRET,
  hasRefreshToken: !!process.env.ZOHO_REFRESH_TOKEN,
  hasOrgId: !!process.env.ZOHO_ORGANIZATION_ID,
  dc: process.env.ZOHO_DC || "com",
});

import { getZohoAccessToken } from "../../lib/zoho/auth.ts";

const token = await getZohoAccessToken();

console.log("Zoho auth successful.");
console.log(`Token starts with: ${token.slice(0, 8)}...`);