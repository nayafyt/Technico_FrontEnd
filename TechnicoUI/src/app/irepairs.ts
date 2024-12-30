export interface IRepairs {
    sceduleDate: string;
    repairType: string;
    description: string;
    address: string;
    sattus: 'in progress' | 'sceduled'| 'completed';
    cost: number;
    owner: string;
    imageUrl?: string;
}
