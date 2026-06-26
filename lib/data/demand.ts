import { getSupabaseAdmin } from "@/lib/supabase/server";

export type DemandLine = {
  orderNumber: string;
  customerName: string;
  sku: string;
  description: string;
  quantityOpen: number;
  orderDate: string;
  dueDate: string;
};

type DemandLineRow = {
  order_number: string;
  customer_name: string | null;
  sku: string;
  description: string | null;
  quantity_open: number | string;
  order_date: string | null;
  due_date: string | null;
};

const demandLineSelect = `
  order_number,
  customer_name,
  sku,
  description,
  quantity_open,
  order_date,
  due_date
`;

function toDemandLine(row: DemandLineRow): DemandLine {
  return {
    orderNumber: row.order_number,
    customerName: row.customer_name ?? "",
    sku: row.sku,
    description: row.description ?? "",
    quantityOpen: Number(row.quantity_open ?? 0),
    orderDate: row.order_date ?? "",
    dueDate: row.due_date ?? "",
  };
}

export async function getDemandItems(): Promise<DemandLine[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("demand_lines")
    .select(demandLineSelect)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch demand lines: ${error.message}`);
  }

  return (data ?? []).map(toDemandLine);
}

export async function getDemandItemsByOrderNumber(
  orderNumber: string
): Promise<DemandLine[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("demand_lines")
    .select(demandLineSelect)
    .eq("order_number", orderNumber)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(
      `Failed to fetch demand lines for ${orderNumber}: ${error.message}`
    );
  }

  return (data ?? []).map(toDemandLine);
}

export async function getDemandItemsBySku(sku: string): Promise<DemandLine[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("demand_lines")
    .select(demandLineSelect)
    .eq("sku", sku)
    .order("id", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch demand lines for ${sku}: ${error.message}`);
  }

  return (data ?? []).map(toDemandLine);
}

export async function replaceDemandLines(
  demandLines: DemandLine[]
): Promise<void> {
  const { error: deleteError } = await getSupabaseAdmin()
    .from("demand_lines")
    .delete()
    .not("id", "is", null);

  if (deleteError) {
    throw new Error(`Failed to clear demand lines: ${deleteError.message}`);
  }

  const rows = demandLines.map((line) => ({
    order_number: line.orderNumber,
    customer_name: line.customerName,
    sku: line.sku,
    description: line.description,
    quantity_open: line.quantityOpen,
    order_date: line.orderDate || null,
    due_date: line.dueDate || null,
    updated_at: new Date().toISOString(),
  }));

  for (let index = 0; index < rows.length; index += 1000) {
    const chunk = rows.slice(index, index + 1000);
    const { error: insertError } = await getSupabaseAdmin()
      .from("demand_lines")
      .insert(chunk);

    if (insertError) {
      throw new Error(`Failed to insert demand lines: ${insertError.message}`);
    }
  }
}
