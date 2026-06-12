import { zohoGet } from "./client";

export type ZohoSalesOrderHeader = {
  salesorder_id: string;
  salesorder_number: string;
  customer_name?: string;
  date?: string;
  shipment_date?: string;
  delivery_date?: string;

  status?: string;
  order_status?: string;
  current_sub_status?: string;

  quantity?: number;
  quantity_packed?: number;
  quantity_shipped?: number;
  quantity_invoiced?: number;

  is_drop_shipment?: boolean;
  is_backorder?: boolean;
  is_manually_fulfilled?: boolean;
  order_fulfillment_type?: string;
};

export type ZohoSalesOrderLineItem = {
  item_id?: string;
  sku?: string;
  name?: string;
  description?: string;

  quantity?: number;
  quantity_cancelled?: number;
  quantity_packed?: number;
  quantity_shipped?: number;
  quantity_invoiced?: number;
};

export type ZohoSalesOrderDetail = ZohoSalesOrderHeader & {
  line_items: ZohoSalesOrderLineItem[];
};

type SalesOrderListResponse = {
  salesorders: ZohoSalesOrderHeader[];
  page_context?: {
    page: number;
    per_page: number;
    has_more_page: boolean;
  };
};

type SalesOrderDetailResponse = {
  salesorder: ZohoSalesOrderDetail;
};

export async function listAllSalesOrderHeaders(options?: {
  dateAfter?: string;
}) {
  const results: ZohoSalesOrderHeader[] = [];
  let page = 1;

  while (true) {
    console.log(`Fetching sales order headers page ${page}...`);

    const data = await zohoGet<SalesOrderListResponse>("/salesorders", {
      page,
      per_page: 200,
      date_after: options?.dateAfter,
    });

    results.push(...(data.salesorders ?? []));

    if (!data.page_context?.has_more_page) {
      break;
    }

    page += 1;
  }

  return results;
}

export async function getSalesOrderDetail(salesOrderId: string) {
  const data = await zohoGet<SalesOrderDetailResponse>(
    `/salesorders/${salesOrderId}`
  );

  return data.salesorder;
}