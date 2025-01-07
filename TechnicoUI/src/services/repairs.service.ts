import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRepairs } from '../app/models/irepairs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RepairsService {
  private apiUrl1 = 'http://localhost:5001/repairs';

  constructor(private http: HttpClient) {}

  getRepairs(): Observable<IRepairs[]> {
    return this.http.get<IRepairs[]>(this.apiUrl1);
  }

  createRepair(repair: IRepairs): Observable<IRepairs> {
    // repair.date = new Date().toISOString();
    // this.repairs.push(repair);
    // return of(repair);
    return this.http.post<IRepairs>(this.apiUrl1, repair);
  }

  updateRepairStatus(repair: IRepairs): Observable<IRepairs> {
    const url = `${this.apiUrl1}/${repair.userId}`;
    return this.http.put<IRepairs>(url, {status: repair.status})
  }
}
