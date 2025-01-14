export interface IRepairs {
  id?:number
  dateTime: string;
  repairType: string;
  description?: string;
  address: string;
  status: string;
  cost: number;
  propertyItemDto: {
    propertyIdentificationNumber: string;
    address: string;
    yearOfConstruction: number;
    propertyType: string;
    propertyOwnerVatNumber: string;
    propertyRepairDtos: [];
  };
}

export interface ApiResponse {
  value: IRepairs;
  statusCode: number;
  description: string;
}

export interface ApiResponse2 {
  value: IRepairs[];
  statusCode: number;
  description: string;
}
