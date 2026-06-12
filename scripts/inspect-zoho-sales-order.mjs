const organizationId = process.env.ZOHO_ORGANIZATION_ID;
const accessToken = process.env.ZOHO_ACCESS_TOKEN;
const salesOrderId = process.argv[2];

if (!organizationId) {
  throw new Error("Missing ZOHO_ORGANIZATION_ID environment variable.");
}

if (!accessToken) {
  throw new Error("Missing ZOHO_ACCESS_TOKEN environment variable.");
}

if (!salesOrderId) {
  throw new Error("Usage: node scripts/inspect-zoho-sales-order.mjs <sales_order_id>");
}

const url =
  `https://www.zohoapis.com/books/v3/salesorders/${salesOrderId}` +
  `?organization_id=${organizationId}`;

const response = await fetch(url, {
  headers: {
    Authorization: `Zoho-oauthtoken ${accessToken}`,
  },
});

const json = await response.json();

if (!response.ok) {
  console.error(JSON.stringify(json, null, 2));
  process.exit(1);
}

const salesOrder = json.salesorder ?? json.sales_order ?? json;

console.log("Top-level keys:");
console.log(Object.keys(salesOrder).sort());

console.log("\nLikely useful fields:");
const usefulFields = [
  "salesorder_id",
  "salesorder_number",
  "status",
  "custom_status",
  "shipment_status",
  "delivery_method",
  "is_drop_shipment",
  "drop_shipment",
  "is_inclusive_tax",
  "customer_name",
  "reference_number",
  "date",
  "shipment_date",
  "expected_shipment_date",
  "warehouse_id",
  "warehouse_name",
];

for (const field of usefulFields) {
  if (field in salesOrder) {
    console.log(field + ":", salesOrder[field]);
  }
}

console.log("\nAddresses / shipping-ish fields:");
for (const [key, value] of Object.entries(salesOrder)) {
  if (
    key.toLowerCase().includes("ship") ||
    key.toLowerCase().includes("delivery") ||
    key.toLowerCase().includes("warehouse") ||
    key.toLowerCase().includes("drop")
  ) {
    console.log(key + ":", JSON.stringify(value, null, 2));
  }
}

console.log("\nLine item fields:");
for (const line of salesOrder.line_items ?? []) {
  console.log({
    item_id: line.item_id,
    sku: line.sku,
    name: line.name,
    quantity: line.quantity,
    quantity_packed: line.quantity_packed,
    quantity_shipped: line.quantity_shipped,
    quantity_invoiced: line.quantity_invoiced,
    item_type: line.item_type,
    product_type: line.product_type,
    warehouse_id: line.warehouse_id,
    warehouse_name: line.warehouse_name,
    salesorder_item_id: line.salesorder_item_id,
    keys: Object.keys(line).sort(),
  });
}

console.log("\nFull response written to console:");
console.log(JSON.stringify(salesOrder, null, 2));