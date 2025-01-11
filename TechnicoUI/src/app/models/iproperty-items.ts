export interface IPropertyItems {
    propertyIdentificationNumber: Number;
    address: string;
    yearOfConstruction: Number;
    propertyType: string;
    propertyOwnerVatNumber: string;
}
export interface ApiResponse {
    value: IPropertyItems;  
    statusCode: number;
    description: string;
  }
