export interface IRepairs {
    sceduleDate: string;
    repairType: string;
    description: string;
    address: string;
    status: 'in progress' | 'sceduled'| 'completed';
    cost: number;
    owner: string;
    
}
