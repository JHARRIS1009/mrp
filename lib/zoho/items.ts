import { zohoGet } from "./client";

export type ZohoItem = {
  item_id?: string;
  composite_item_id?: string;
  name?: string;
  item_name?: string;
  description?: string;
  sku?: string;
  status?: string;
  track_inventory?: boolean;
  item_type?: string;
  stock_on_hand?: number;
  available_stock?: number;
  actual_available_stock?: number;
};

type ItemsResponse = {
  items: ZohoItem[];
  page_context?: {
    has_more_page: boolean;
    page: number;
  };
};

type CompositeItemsResponse = {
  composite_items: ZohoItem[];
  page_context?: {
    has_more_page: boolean;
    page: number;
  };
};

export async function listAllItems() {
  const results: ZohoItem[] = [];
  let page = 1;

  while (true) {
    console.log(`Fetching items page ${page}...`);

    const data = await zohoGet<ItemsResponse>("/items", {
      page,
      per_page: 200,
    });

    results.push(...(data.items ?? []));

    if (!data.page_context?.has_more_page) break;
    page += 1;
  }

  return results;
}

export async function listAllCompositeItemsAsInventoryItems() {
  const results: ZohoItem[] = [];
  let page = 1;

  while (true) {
    console.log(`Fetching composite items page ${page}...`);

    const data = await zohoGet<CompositeItemsResponse>("/compositeitems", {
      page,
      per_page: 200,
    });

    results.push(...(data.composite_items ?? []));

    if (!data.page_context?.has_more_page) break;
    page += 1;
  }

  return results;
}