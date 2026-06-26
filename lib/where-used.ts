import { getBomLines } from "@/lib/data/bom";

export type WhereUsedResult = {
  parentSku: string;
  qtyPer: number;
  totalUsage: number;
  path: string[];
};

export async function calculateRecursiveWhereUsed(
  targetSku: string
): Promise<WhereUsedResult[]> {
  const bomLines = await getBomLines();
  const results: WhereUsedResult[] = [];

  function findParents(
    currentSku: string,
    path: string[],
    accumulatedUsage: number
  ) {
    const parentLines = bomLines.filter(
      (line) => line.childSku === currentSku
    );

    for (const line of parentLines) {
      const newPath = [line.parentSku, ...path];
      const totalUsage = accumulatedUsage * line.qtyPer;

      results.push({
        parentSku: line.parentSku,
        qtyPer: line.qtyPer,
        totalUsage,
        path: newPath,
      });

      findParents(line.parentSku, newPath, totalUsage);
    }
  }

  findParents(targetSku, [targetSku], 1);

  return results;
}
