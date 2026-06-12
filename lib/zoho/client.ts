import { getZohoAccessToken } from "./auth";

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function zohoGet<T>(
  path: string,
  query: Record<string, string | number | boolean | undefined> = {}
): Promise<T> {
  const dc = process.env.ZOHO_DC || "com";
  const token = await getZohoAccessToken();

  const url = new URL(`https://www.zohoapis.${dc}/books/v3${path}`);

  url.searchParams.set("organization_id", requireEnv("ZOHO_ORGANIZATION_ID"));

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
    },
  });

  const text = await res.text();

  if (!res.ok) {
    console.error(`Zoho GET failed: ${path}`);
    console.error("Status:", res.status);
    console.error("Response:", text);
    throw new Error(`Zoho GET failed: ${path}`);
  }

  return JSON.parse(text) as T;
}