export interface IRepairs {
  id?:number
  dateTime: string;
  repairType: string;
  description?: string;
  address: string;
  status: string;
  cost: number;
  propertyOwnerDto: {
    vatNumber: number;
    address: string;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    userType: string;
    propertyItems: [
      {
        propertyIdentificationNumber: string;
        yearOfConstruction: number;
        address: string;
        propertyType: string;
        propertyOwnerVatNumber: string;
      }
    ];
    propertyRepairs: [];
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
