import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRepairs } from '../app/models/irepairs';

@Injectable({
  providedIn: 'root',
})
export class RepairsService {
  private repairs: IRepairs[] = [
    {
      date: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'alimo',
      userId: '1',
    },
    {
      date: '2024-12-30',
      repairType: 'mechanic',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'kaisa',
      userId: '2',
    },
    {
      date: '2024-12-30',
      repairType: 'painting',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'gpati',
      userId: '3',
    },
    {
      date: '2024-12-30',
      repairType: 'constructing',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'kallithea',
      userId: '4',
    },
    {
      date: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'pending',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '5',
    },
    {
      date: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'sceduled',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '6',
    },
    {
      date: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'in progress',
      cost: 10000,
      owner: 'John Doe',
      title: 'Glyfada',
      location: 'Athens',
      userId: '7',
    },
  ];
  getRepairs(): Observable<IRepairs[]> {
    return of(this.repairs);
  }

  createRepair(repair: IRepairs): Observable<IRepairs> {
    repair.date = new Date().toISOString();
    this.repairs.push(repair);
    return of(repair);
  }
}
