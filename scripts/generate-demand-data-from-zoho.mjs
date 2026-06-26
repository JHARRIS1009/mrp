import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const { generateDemandData } = await import(
  "../lib/generators/generate-demand-data.ts"
);

await generateDemandData();
