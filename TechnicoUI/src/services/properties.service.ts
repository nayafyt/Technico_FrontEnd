import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, IPropertyItems } from '../app/models/iproperty-items';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private apiUrl = "https://localhost:5074/api/PropertyItems";

  constructor(private http: HttpClient) {}

  getProperties(pageNumber: number = 1, pageSize: number = 10): Observable<IPropertyItems[]> {
    return this.http.get<ApiResponse>(this.apiUrl, {
      params: {
        pageCount: pageNumber.toString(),
        pageSize: pageSize.toString(),
      },
    }).pipe(
      map((response) => {
        if (Array.isArray(response.value)) {
          return response.value as IPropertyItems[];
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
 
}
