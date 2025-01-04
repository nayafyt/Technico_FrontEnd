import { Injectable } from '@angular/core';
import { IRepairsOngoing } from '../app/models/irepairsOngoing';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairsOngoingService {
private repairsOngoing: IRepairsOngoing[] = [
    {
      date: '2024-12-30',
      repairType: 'Electrical',
      description: 'Initial Description',
      address: 'Glyfada',
      status: 'in progress',
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
      status: 'completed',
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
      status: 'scheduled',
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
      status: 'in progress',
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
      status: 'completed',
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
      status: 'scheduled',
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
  getRepairs(): Observable<IRepairsOngoing[]> {
    return of(this.repairsOngoing);
  }
}
