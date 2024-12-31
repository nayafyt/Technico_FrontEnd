export interface IRepairs {
    sceduleDate: string;
    repairType: string;
    description: string;
    address: string;
<<<<<<<< HEAD:TechnicoUI/src/models/irepairs.ts
    status: 'in progress' | 'sceduled' | 'completed' | 'pending';
    cost: number;
    owner: string;
    imageUrl?: string;
    title: string;
    location: string;
    userId: string;
========
    status: 'in progress' | 'sceduled'| 'completed';
    cost: number;
    owner: string;
    
>>>>>>>> Christina's-Branch:TechnicoUI/src/app/models/irepairs.ts
}
