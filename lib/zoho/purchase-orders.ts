import { zohoGet } from "./client";

export type ZohoPurchaseOrderHeader = {
  purchaseorder_id: string;
  purchaseorder_number: string;
  vendor_name?: string;
  reference_number?: string;
  date?: string;
  delivery_date?: string;
  expected_delivery_date?: string;
  status?: string;
  order_status?: string;
  current_sub_status?: string;
  received_status?: string;
  is_drop_shipment?: boolean;
  quantity_yet_to_receive?: number;
  total_ordered_quantity?: number;
};

export type ZohoPurchaseOrderLineItem = {
  item_id?: string;
  sku?: string;
  name?: string;
  description?: string;
  quantity?: number;
  quantity_received?: number;
  quantity_cancelled?: number;
  item_order?: number;
};

export type ZohoPurchaseOrderDetail = ZohoPurchaseOrderHeader & {
  line_items: ZohoPurchaseOrderLineItem[];
};

type PurchaseOrderListResponse = {
  purchaseorders: ZohoPurchaseOrderHeader[];
  page_context?: {
    has_more_page: boolean;
    page: number;
  };
};

type PurchaseOrderDetailResponse = {
  purchaseorder: ZohoPurchaseOrderDetail;
};

export async function listAllPurchaseOrderHeaders() {
  const results: ZohoPurchaseOrderHeader[] = [];
  let page = 1;

  while (true) {
    console.log(`Fetching purchase order headers page ${page}...`);

    const data = await zohoGet<PurchaseOrderListResponse>("/purchaseorders", {
      page,
      per_page: 200,
    });

    results.push(...(data.purchaseorders ?? []));

    if (!data.page_context?.has_more_page) break;
    page += 1;
  }

  return results;
}

export async function getPurchaseOrderDetail(purchaseOrderId: string) {
  const data = await zohoGet<PurchaseOrderDetailResponse>(
    `/purchaseorders/${purchaseOrderId}`
  );

  return data.purchaseorder;
}