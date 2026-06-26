import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const { generateInventoryData } = await import(
  "../lib/generators/generate-inventory-data.ts"
);

await generateInventoryData();
