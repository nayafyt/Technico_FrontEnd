export interface IRepairsOngoing {
    date: string;
    repairType: string;
    description: string;
    address: string;
    status: 'in progress' | 'scheduled' | 'completed';
    cost: number;
    owner: string;
    imageUrl?: string;
    title: string;
    location: string;
    userId: string;
}