import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const { generateBomData } = await import(
  "../lib/generators/generate-bom-data.ts"
);

await generateBomData();
