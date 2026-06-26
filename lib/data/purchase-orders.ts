import { getSupabaseAdmin } from "@/lib/supabase/server";

export type PurchaseOrderLine = {
  poNumber: string;
  vendorName: string;
  sku: string;
  description: string;
  quantity: number;
  expectedDate: string;
};

type PurchaseOrderLineRow = {
  po_number: string;
  vendor_name: string | null;
  sku: string;
  description: string | null;
  quantity: number | string;
  expected_date: string | null;
};

const purchaseOrderLineSelect = `
  po_number,
  vendor_name,
  sku,
  description,
  quantity,
  expected_date
`;

function toPurchaseOrderLine(row: PurchaseOrderLineRow): PurchaseOrderLine {
  return {
    poNumber: row.po_number,
    vendorName: row.vendor_name ?? "",
    sku: row.sku,
    description: row.description ?? "",
    quantity: Number(row.quantity ?? 0),
    expectedDate: row.expected_date ?? "",
  };
}

export async function getPurchaseOrderLines(): Promise<PurchaseOrderLine[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("purchase_order_lines")
    .select(purchaseOrderLineSelect)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch purchase order lines: ${error.message}`);
  }

  return (data ?? []).map(toPurchaseOrderLine);
}

export async function getPurchaseOrderLinesBySku(
  sku: string
): Promise<PurchaseOrderLine[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("purchase_order_lines")
    .select(purchaseOrderLineSelect)
    .eq("sku", sku)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(
      `Failed to fetch purchase order lines for ${sku}: ${error.message}`
    );
  }

  return (data ?? []).map(toPurchaseOrderLine);
}

export async function getPurchaseOrderLinesByPoNumber(
  poNumber: string
): Promise<PurchaseOrderLine[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("purchase_order_lines")
    .select(purchaseOrderLineSelect)
    .eq("po_number", poNumber)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(
      `Failed to fetch purchase order lines for ${poNumber}: ${error.message}`
    );
  }

  return (data ?? []).map(toPurchaseOrderLine);
}

export async function replacePurchaseOrderLines(
  purchaseOrderLines: PurchaseOrderLine[]
): Promise<void> {
  const { error: deleteError } = await getSupabaseAdmin()
    .from("purchase_order_lines")
    .delete()
    .not("id", "is", null);

  if (deleteError) {
    throw new Error(
      `Failed to clear purchase order lines: ${deleteError.message}`
    );
  }

  const rows = purchaseOrderLines.map((line) => ({
    po_number: line.poNumber,
    vendor_name: line.vendorName,
    sku: line.sku,
    description: line.description,
    quantity: line.quantity,
    expected_date: line.expectedDate || null,
    updated_at: new Date().toISOString(),
  }));

  for (let index = 0; index < rows.length; index += 1000) {
    const chunk = rows.slice(index, index + 1000);
    const { error: insertError } = await getSupabaseAdmin()
      .from("purchase_order_lines")
      .insert(chunk);

    if (insertError) {
      throw new Error(
        `Failed to insert purchase order lines: ${insertError.message}`
      );
    }
  }
}
