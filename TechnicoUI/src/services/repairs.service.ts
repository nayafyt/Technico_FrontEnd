import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IRepairs } from '../app/models/irepairs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RepairsService {
  private apiUrl1 = 'http://localhost:5001/repairs';

  constructor(private http: HttpClient) {}

  getRepairs(): Observable<IRepairs[]> {
    return this.http.get(this.apiUrl1).pipe(map((response: any) =>response))
  }

  createRepair(repair: IRepairs): Observable<IRepairs> {
    // repair.date = new Date().toISOString();
    // this.repairs.push(repair);
    // return of(repair);
    return this.http.post<IRepairs>(this.apiUrl1, repair);
  }

  updateRepairStatus(repair: IRepairs): Observable<IRepairs> {
    // let httpParams = new HttpParams().set('page', page)
    const url = `${this.apiUrl1}`;
    return this.http.put<IRepairs>(url, {status: repair.status})
  }
}
