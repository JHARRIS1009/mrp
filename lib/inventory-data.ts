export type InventoryItem = {
    sku: string;
    description: string;
    onHand: number;
    incoming: number;
    allocated: number;
};

export async function getInventoryItems(): Promise<InventoryItem[]> {
    return [
        {
            sku: "EZ100",
            description: "Example finished good",
            onHand: 15,
            incoming: 0,
            allocated: 0,
        },
        {
            sku: "EZ1.1",
            description: "Example component",
            onHand: 400,
            incoming: 0,
            allocated: 0,
        },
        {
            sku: "BOLT-001",
            description: "Example bolt",
            onHand: 50,
            incoming: 0,
            allocated: 0,
        },
        {
            sku: "BEARING",
            description: "Example bearing",
            onHand: 1000,
            incoming: 0,
            allocated: 0,
        },
        {
            sku: "EZ200",
            description: "Example second finished good",
            onHand: 0,
            incoming: 0,
            allocated: 0,
        },
    ];
}