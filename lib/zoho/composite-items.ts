import { zohoGet } from "./client";

export type ZohoCompositeItemHeader = {
  composite_item_id: string;
  sku?: string;
  name?: string;
  status?: string;
  track_inventory?: boolean;
  item_type?: string;
};

export type ZohoCompositeComponentItem = {
  item_id?: string;
  sku?: string;
  name?: string;
  quantity?: number;
};

export type ZohoCompositeItemDetail = ZohoCompositeItemHeader & {
  composite_component_items?: ZohoCompositeComponentItem[];
  mapped_items?: ZohoCompositeComponentItem[];
};

type CompositeItemListResponse = {
  composite_items: ZohoCompositeItemHeader[];
  page_context?: {
    has_more_page: boolean;
    page: number;
  };
};

type CompositeItemDetailResponse = {
  composite_item: ZohoCompositeItemDetail;
};

export async function listAllCompositeItemHeaders() {
  const results: ZohoCompositeItemHeader[] = [];
  let page = 1;

  while (true) {
    console.log(`Fetching composite item headers page ${page}...`);

    const data = await zohoGet<CompositeItemListResponse>("/compositeitems", {
      page,
      per_page: 200,
    });

    results.push(...(data.composite_items ?? []));

    if (!data.page_context?.has_more_page) break;
    page += 1;
  }

  return results;
}

export async function getCompositeItemDetail(compositeItemId: string) {
  const data = await zohoGet<CompositeItemDetailResponse>(
    `/compositeitems/${compositeItemId}`
  );

  return data.composite_item;
}