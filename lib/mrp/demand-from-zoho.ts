import {
  getSalesOrderDetail,
  listAllSalesOrderHeaders,
  ZohoSalesOrderDetail,
  ZohoSalesOrderHeader,
  ZohoSalesOrderLineItem,
} from "../zoho/sales-orders";

export type DemandLine = {
  orderNumber: string;
  customerName: string;
  sku: string;
  description: string;
  quantityOpen: number;
  orderDate: string;
  dueDate: string;
};

function normalize(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

function numberValue(value: unknown) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export function isCandidateDemandOrder(order: ZohoSalesOrderHeader) {
  const status = normalize(order.status);
  const orderStatus = normalize(order.order_status);
  const currentSubStatus = normalize(order.current_sub_status);

  if (order.is_drop_shipment === true) return false;

  if (status === "draft") return false;
  if (status === "void") return false;
  if (status === "cancelled") return false;

  if (orderStatus === "draft") return false;
  if (orderStatus === "closed") return false;
  if (orderStatus === "void") return false;
  if (orderStatus === "cancelled") return false;

  if (currentSubStatus === "draft") return false;
  if (currentSubStatus === "closed") return false;

  const ordered = numberValue(order.quantity);
  const packed = numberValue(order.quantity_packed);

  if (ordered <= 0) return false;
  if (ordered <= packed) return false;

  return true;
}

function getLineOpenQuantity(line: ZohoSalesOrderLineItem) {
  const ordered = numberValue(line.quantity);
  const cancelled = numberValue(line.quantity_cancelled);
  const packed = numberValue(line.quantity_packed);

  return ordered - cancelled - packed;
}

function buildDemandLinesFromOrder(
  order: ZohoSalesOrderDetail,
  inventoryTrackedSkus: Set<string>
): DemandLine[] {
  const demand: DemandLine[] = [];

  for (const line of order.line_items ?? []) {
    const sku = line.sku?.trim();

    if (!sku) continue;
    if (!inventoryTrackedSkus.has(sku)) continue;

    const quantityOpen = getLineOpenQuantity(line);

    if (quantityOpen <= 0) continue;

    demand.push({
        orderNumber: order.salesorder_number,
        customerName: order.customer_name ?? "",
        sku,
        description: line.name || line.description || "",
        quantityOpen,
        orderDate: order.date || "",
        dueDate: order.delivery_date || order.shipment_date || order.date || "",
    });
  }

  return demand;
}

export async function getDemandFromZoho(options: {
  inventoryTrackedSkus: Set<string>;
  dateAfter?: string;
}) {
  const headers = await listAllSalesOrderHeaders({
    dateAfter: options.dateAfter,
  });

  console.log(`Fetched ${headers.length} sales order headers.`);

  const candidates = headers.filter(isCandidateDemandOrder);

  console.log(`Candidate demand orders after header filter: ${candidates.length}`);

  const demand: DemandLine[] = [];

  for (let i = 0; i < candidates.length; i += 1) {
    const header = candidates[i];

    if ((i + 1) % 25 === 0 || i === 0) {
      console.log(
        `Fetching detail ${i + 1}/${candidates.length}: ${header.salesorder_number}`
      );
    }

    const detail = await getSalesOrderDetail(header.salesorder_id);

    demand.push(
      ...buildDemandLinesFromOrder(detail, options.inventoryTrackedSkus)
    );
  }

  console.log(`Generated ${demand.length} demand lines.`);

  return demand;
}