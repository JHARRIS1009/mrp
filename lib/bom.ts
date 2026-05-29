export type BomLine = {
    parentSku: string;
    childSku: string;
    qtyPer: number;
};

export async function getBomLines(): Promise<BomLine[]> {
    return [
        {
            parentSku: "EZ100",
            childSku: "EZ1.1",
            qtyPer: 1,
        },
    ];
}