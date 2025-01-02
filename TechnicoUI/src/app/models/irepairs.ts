export interface IRepairs {
    date: string;
    repairType: string;
    description: string;
    address: string;
    status: 'in progress' | 'sceduled' | 'completed' | 'pending';
    cost: number;
    owner: string;
    imageUrl?: string;
    title: string;
    location: string;
    userId: string;
}
