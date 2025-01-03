import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  createPropertyOwner(propertyOwner: IPropertyOwner): Observable<IPropertyOwner> {
    this.propertyOwners.push(propertyOwner);  // Adds new property owner to the array
    return of(propertyOwner);  // Returns the created property owner as an Observable
  }

  getPropertyOwners(): Observable<IPropertyOwner[]> {
    return of(this.propertyOwners);  // Returns all property owners
  }

  // Method to update an existing property owner
  updatePropertyOwner(updatedOwner: IPropertyOwner): Observable<IPropertyOwner> {
    const index = this.propertyOwners.findIndex(
      (owner) => owner.vat === updatedOwner.vat
    );
    if (index > -1) {
      this.propertyOwners[index] = updatedOwner;
    }
    return of(updatedOwner);
  }

  // Method to delete a property owner
  deletePropertyOwner(vat: string): Observable<void> {
    const index = this.propertyOwners.findIndex(owner => owner.vat === vat);
    if (index !== -1) {
      this.propertyOwners.splice(index, 1);
      return of(undefined);
    } else {
      throw new Error('Property owner not found');
    }
  }
  
}
