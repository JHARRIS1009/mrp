import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const { generatePurchaseOrdersData } = await import(
  "../lib/generators/generate-purchase-orders-data.ts"
);

await generatePurchaseOrdersData();
