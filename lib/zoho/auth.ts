let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function getZohoAccessToken() {
  const now = Date.now();

  if (cachedAccessToken && now < tokenExpiresAt) {
    return cachedAccessToken;
  }

  const dc = process.env.ZOHO_DC || "com";

  const params = new URLSearchParams({
    refresh_token: requireEnv("ZOHO_REFRESH_TOKEN"),
    client_id: requireEnv("ZOHO_CLIENT_ID"),
    client_secret: requireEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });

  const res = await fetch(`https://accounts.zoho.${dc}/oauth/v2/token`, {
    method: "POST",
    body: params,
  });

  const text = await res.text();

  if (!res.ok) {
    console.error("Zoho token refresh failed.");
    console.error("Status:", res.status);
    console.error("Response:", text);
    throw new Error("Zoho token refresh failed. See response above.");
  }

  const data = JSON.parse(text);

  if (!data.access_token) {
    throw new Error(`Zoho token response did not include access_token: ${text}`);
  }

  cachedAccessToken = data.access_token;
  tokenExpiresAt = now + ((data.expires_in ?? 3600) - 120) * 1000;

  return cachedAccessToken;
}