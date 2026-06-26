import { supabaseAdmin } from "@/lib/supabase/server";

export type BomLine = {
  parentSku: string;
  childSku: string;
  qtyPer: number;
};

type BomLineRow = {
  parent_sku: string;
  child_sku: string;
  qty_per: number | string;
};

const bomLineSelect = `
  parent_sku,
  child_sku,
  qty_per
`;

function toBomLine(row: BomLineRow): BomLine {
  return {
    parentSku: row.parent_sku,
    childSku: row.child_sku,
    qtyPer: Number(row.qty_per ?? 0),
  };
}

export async function getBomLines(): Promise<BomLine[]> {
  const { data, error } = await supabaseAdmin
    .from("bom_lines")
    .select(bomLineSelect)
    .order("parent_sku", { ascending: true })
    .order("child_sku", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch BOM lines: ${error.message}`);
  }

  return (data ?? []).map(toBomLine);
}

export async function getBomLinesByParentSku(
  parentSku: string
): Promise<BomLine[]> {
  const { data, error } = await supabaseAdmin
    .from("bom_lines")
    .select(bomLineSelect)
    .eq("parent_sku", parentSku)
    .order("child_sku", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch BOM lines for ${parentSku}: ${error.message}`);
  }

  return (data ?? []).map(toBomLine);
}

export async function getBomLinesByChildSku(
  childSku: string
): Promise<BomLine[]> {
  const { data, error } = await supabaseAdmin
    .from("bom_lines")
    .select(bomLineSelect)
    .eq("child_sku", childSku)
    .order("parent_sku", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch BOM lines for ${childSku}: ${error.message}`);
  }

  return (data ?? []).map(toBomLine);
}

export async function replaceBomLines(bomLines: BomLine[]): Promise<void> {
  const { error: deleteError } = await supabaseAdmin
    .from("bom_lines")
    .delete()
    .not("parent_sku", "is", null);

  if (deleteError) {
    throw new Error(`Failed to clear BOM lines: ${deleteError.message}`);
  }

  const rows = bomLines.map((line) => ({
    parent_sku: line.parentSku,
    child_sku: line.childSku,
    qty_per: line.qtyPer,
    updated_at: new Date().toISOString(),
  }));

  for (let index = 0; index < rows.length; index += 1000) {
    const chunk = rows.slice(index, index + 1000);
    const { error: insertError } = await supabaseAdmin
      .from("bom_lines")
      .insert(chunk);

    if (insertError) {
      throw new Error(`Failed to insert BOM lines: ${insertError.message}`);
    }
  }
}
