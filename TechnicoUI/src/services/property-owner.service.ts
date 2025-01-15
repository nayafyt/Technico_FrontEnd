import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { IPropertyOwner } from '../app/models/iproperty-owner'; 
import { ApiResponse } from '../app/models/iproperty-items';

@Injectable({
  providedIn: 'root',
})
export class PropertyOwnerService {
  private apiUrl = 'http://localhost:5074/api/PropertyOwners'; 

  constructor(private http: HttpClient) {}

  getPropertyOwners(): Observable<IPropertyOwner[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((response) => {
        if (Array.isArray(response.value)) {
          return response.value as IPropertyOwner[];
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error('API error:', error);
        return of([]); 
      })
    );
  }

  createPropertyOwners(propertyOwner: IPropertyOwner): Observable<IPropertyOwner[]> {
    return this.http.post<ApiResponse>(this.apiUrl, propertyOwner).pipe(
      map((response) => {
        if (Array.isArray(response.value)) {
          return response.value as IPropertyOwner[];
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error creating property owner:', error);
        return throwError(() => new Error('Failed to create property owner'));
      })
    );
  }

  updatePropertyOwner(owner: IPropertyOwner): Observable<IPropertyOwner[]> {
    if (!owner.vatNumber) {
      console.error('VAT Number is undefined');
      return throwError(() => new Error('Invalid VAT Number'));
    }

    const url = `${this.apiUrl}/${owner.vatNumber}`;
    return this.http.put<ApiResponse>(url, owner).pipe(
      map((response) => {
        if (response && Array.isArray(response.value)) {
          return response.value as IPropertyOwner[];
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error updating property owner:', error);
        return throwError(() => new Error('Failed to update property owner'));
      })
    );
  }

  deletePropertyOwner(owner: IPropertyOwner): Observable<IPropertyOwner[]> {
    if (!owner.vatNumber) {
      console.error('VAT Number is undefined');
      return throwError(() => new Error('Invalid VAT Number'));
    }

    const url = `${this.apiUrl}/${owner.vatNumber}`;
    return this.http.delete<ApiResponse>(url).pipe(
      map((response) => {
        if (response && Array.isArray(response.value)) {
          return response.value as IPropertyOwner[];
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error deleting property owner:', error);
        return throwError(() => new Error('Failed to delete property owner'));
      })
    );
  }

  // Function to fetch owner details by VAT number
  getOwnerByVat(vatNumber: string): Observable<any> {
    const url = `${this.apiUrl}/${vatNumber}`;
    console.log("FETCH WITH VAT",vatNumber," ",this.http.get<ApiResponse>(this.apiUrl));
    return this.http.get<ApiResponse>(url).pipe(
      map((response) => {
        if (response.statusCode === 200) {
          console.log("RESPONSE",response.value);
          return response.value;
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.error('Error fetching owner by VAT:', error);
        return throwError(() => new Error('Failed to fetch owner by VAT'));})
    );
  }

}
