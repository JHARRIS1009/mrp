import { replaceBomLines, type BomLine } from "@/lib/data/bom";
import { recordSyncRun } from "@/lib/sync/runs";
import {
  getCompositeItemDetail,
  listAllCompositeItemHeaders,
} from "@/lib/zoho/composite-items";

function normalize(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

function numberValue(value: unknown) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function isCandidateCompositeItem(item: any) {
  const status = normalize(item.status);
  const sku = String(item.sku ?? "").trim();

  if (!sku) return false;
  if (status !== "active") return false;

  return true;
}

export async function generateBomData() {
  console.log("[GENERATE] Regenerating BOM data...");

  const headers = await listAllCompositeItemHeaders();
  const candidates = headers.filter(isCandidateCompositeItem);

  console.log(`[GENERATE] Composite headers: ${headers.length}`);
  console.log(`[GENERATE] Candidate active composites: ${candidates.length}`);

  const bomLines: BomLine[] = [];

  for (let i = 0; i < candidates.length; i += 1) {
    const header = candidates[i];

    if ((i + 1) % 25 === 0 || i === 0) {
      console.log(
        `[GENERATE] Fetching composite detail ${i + 1}/${candidates.length}: ${header.sku}`
      );
    }

    const detail = await getCompositeItemDetail(header.composite_item_id);

    const parentSku = String(detail.sku ?? "").trim();
    if (!parentSku) continue;

    const components =
      detail.composite_component_items ?? detail.mapped_items ?? [];

    for (const component of components) {
      const childSku = String(component.sku ?? "").trim();
      const qtyPer = numberValue(component.quantity);

      if (!childSku) continue;
      if (qtyPer <= 0) continue;

      bomLines.push({
        parentSku,
        childSku,
        qtyPer,
      });
    }
  }

  bomLines.sort((a, b) => {
    const parentCompare = a.parentSku.localeCompare(b.parentSku);
    if (parentCompare !== 0) return parentCompare;
    return a.childSku.localeCompare(b.childSku);
  });

  await replaceBomLines(bomLines);
  await recordSyncRun({
    syncType: "bom",
    records: bomLines.length,
    status: "success",
    message: "Wrote BOM lines to Supabase.",
  });

  console.log(`[GENERATE] Wrote ${bomLines.length} BOM lines to Supabase.`);

  return {
    records: bomLines.length,
  };
}
