import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IPropertyOwner } from '../app/models/iproperty-owner';

@Injectable({
  providedIn: 'root',
})
export class PropertyOwnerService {
  private propertyOwners: IPropertyOwner[] = [
    {
      vat: 'ak3425',
      name: 'Alex',
      surname: 'Ergopoulos',
      address: 'Odyseeia',
      phoneNumber: 698743596,
      email: 'ergopoulos@gmail.com',
      password: '12345!',
      typeOfUser: 'User',
    },
  ];
  constructor() {}
  getPropertyOwners(): Observable<any[]> {
    return of(this.propertyOwners); 
  }
  createPropertyOwner(owner: any): Observable<any> {
    this.propertyOwners.push(owner); 
    return of(owner); 
  }
  updatePropertyOwner(owner: any): Observable<any> {
    const index = this.propertyOwners.findIndex(o => o.vat === owner.vat);
    if (index !== -1) {
      this.propertyOwners[index] = owner; 
    }
    return of(owner);
  }
  deleteOwner(vat:string): Observable <any> {
    const index=this.propertyOwners.findIndex((owner)=> owner.vat===vat);
    if(index!==1){
      this.propertyOwners.splice(index,1);
      return of({message:'Property Owner deleted sucessfully'});
    }
    else{
      return throwError(()=> new Error('Property owner not found'));
    }
  }
}