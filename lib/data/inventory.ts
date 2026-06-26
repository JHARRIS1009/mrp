import { getSupabaseAdmin } from "@/lib/supabase/server";

export type InventoryItem = {
  sku: string;
  description: string;
  onHand: number;
  incoming: number;
  allocated: number;
};

type InventoryItemRow = {
  sku: string;
  description: string | null;
  on_hand: number | string;
  incoming: number | string;
  allocated: number | string;
};

const inventoryItemSelect = `
  sku,
  description,
  on_hand,
  incoming,
  allocated
`;

function toInventoryItem(row: InventoryItemRow): InventoryItem {
  return {
    sku: row.sku,
    description: row.description ?? "",
    onHand: Number(row.on_hand ?? 0),
    incoming: Number(row.incoming ?? 0),
    allocated: Number(row.allocated ?? 0),
  };
}

export async function getInventoryItems(): Promise<InventoryItem[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("inventory_items")
    .select(inventoryItemSelect)
    .order("sku", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch inventory items: ${error.message}`);
  }

  return (data ?? []).map(toInventoryItem);
}

export async function getInventoryItemBySku(
  sku: string
): Promise<InventoryItem | undefined> {
  const { data, error } = await getSupabaseAdmin()
    .from("inventory_items")
    .select(inventoryItemSelect)
    .eq("sku", sku)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch inventory item for ${sku}: ${error.message}`);
  }

  return data ? toInventoryItem(data) : undefined;
}

export async function replaceInventoryItems(
  inventoryItems: InventoryItem[]
): Promise<void> {
  const { error: deleteError } = await getSupabaseAdmin()
    .from("inventory_items")
    .delete()
    .not("sku", "is", null);

  if (deleteError) {
    throw new Error(`Failed to clear inventory items: ${deleteError.message}`);
  }

  const rows = inventoryItems.map((item) => ({
    sku: item.sku,
    description: item.description,
    on_hand: item.onHand,
    incoming: item.incoming,
    allocated: item.allocated,
    updated_at: new Date().toISOString(),
  }));

  for (let index = 0; index < rows.length; index += 1000) {
    const chunk = rows.slice(index, index + 1000);
    const { error: insertError } = await getSupabaseAdmin()
      .from("inventory_items")
      .insert(chunk);

    if (insertError) {
      throw new Error(`Failed to insert inventory items: ${insertError.message}`);
    }
  }
}
