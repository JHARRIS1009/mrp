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

        {
            parentSku: "EZ100",
            childSku: "BOLT-001",
            qtyPer: 2,
        },

        {
            parentSku: "EZ1.1",
            childSku: "BEARING",
            qtyPer: 4,
        },

        {
            parentSku: "EZ200",
            childSku: "EZ1.1",
            qtyPer: 2,
        },

        {
            parentSku: "EZ200",
            childSku: "BOLT-001",
            qtyPer: 1,
        },
    ];
}