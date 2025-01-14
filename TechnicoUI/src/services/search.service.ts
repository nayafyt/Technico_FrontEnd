import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IPropertyOwner } from '../app/models/iproperty-owner';
import { ApiResponse } from '../app/models/iproperty-items';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://localhost:7063/api/PropertyOwners'; 

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
       }}