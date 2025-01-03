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
  constructor() {}

  // Μέθοδος για να πάρουμε όλους τους ιδιοκτήτες
  getPropertyOwners(): Observable<any[]> {
    return of(this.propertyOwners); // Επιστρέφουμε την λίστα των ιδιοκτητών
  }

  // Μέθοδος για να προσθέσουμε έναν νέο ιδιοκτήτη
  createPropertyOwner(owner: any): Observable<any> {
    this.propertyOwners.push(owner); // Προσθήκη του νέου ιδιοκτήτη
    return of(owner); // Επιστρέφουμε τον νέο ιδιοκτήτη
  }

  // Μέθοδος για να ενημερώσουμε έναν ιδιοκτήτη
  updatePropertyOwner(owner: any): Observable<any> {
    const index = this.propertyOwners.findIndex(o => o.vat === owner.vat);
    if (index !== -1) {
      this.propertyOwners[index] = owner; // Ενημερώνουμε τον ιδιοκτήτη
    }
    return of(owner);
  }
}