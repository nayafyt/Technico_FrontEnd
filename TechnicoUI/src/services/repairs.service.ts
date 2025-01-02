import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRepairs } from '../app/models/irepairs';

@Injectable({
  providedIn: 'root',
})
export class RepairsService {
  private repairs: IRepairs[] = [
    {
      sceduleDate: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '43252395',
    },
    {
      sceduleDate: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '43252396',
    },
    {
      sceduleDate: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '43252396',
    },
    {
      sceduleDate: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '43252396',
    },
    {
      sceduleDate: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '43252396',
    },
    {
      sceduleDate: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '43252396',
    },
  ];
  getRepairs(): Observable<IRepairs[]> {
    return of(this.repairs);
  }

  createRepair(repair: IRepairs): Observable<IRepairs> {
    repair.sceduleDate = new Date().toISOString();
    this.repairs.push(repair);
    return of(repair);
  }
}
