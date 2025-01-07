export interface IRepairs {
    date: string;
    repairType: string;
    description: string;
    address: string;
    status: 'in progress'|'pending'|'declined';
    cost: number;
    owner: string;
    imageUrl?: string;
    title: string;
    location: string;
    userId: string;
}
