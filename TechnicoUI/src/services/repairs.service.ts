import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiResponse, ApiResponse2, IRepairs } from '../app/models/irepairs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  repairTypeToString,
  statusTypeToString,
  propertyTypeToString,
  userTypeToString,
  stringToRepairType,
  stringToStatusType,
  stringToPropertyType,
  stringToUserType

} from '../utils/enum-utils';
import { RepairType, StatusType, PropertyType, UserType } from '../enums/enums';

@Injectable({
  providedIn: 'root',
})
export class RepairsService {
  private apiUrl =
    'http://localhost:5074/api/PropertyRepairs';

  constructor(private http: HttpClient) {}

  // getRepairs(): Observable<IRepairs[]> {
  //   return this.http
  //     .get<ApiResponse2>(this.apiUrl)
  //     .pipe(map((response) => response.value));
  // }

  getRepairs(): Observable<IRepairs[]> {
    return this.http
      .get<ApiResponse2>(this.apiUrl)
      .pipe(
        map((response) => 
          response.value.map(repair => ({
            ...repair,
            status: statusTypeToString(repair.status as unknown as StatusType ),
            repairType: repairTypeToString(repair.repairType as unknown as RepairType),
            userType: userTypeToString(repair.propertyOwnerDto.userType as unknown as UserType),
            // propertyType: propertyTypeToString(repair.propertyOwnerDto.propertyItems[0].propertyType as unknown as PropertyType)
          }))
        )
      );
  }

  // searchRepairsById(userId: string): Observable<IRepairs[]> {
  //   let params = new HttpParams().set('vatNumber', userId); //userId
  //   return this.http
  //     .get<ApiResponse2>(`${this.apiUrl}/search-by-vat`, { params })
  //     .pipe(map((response) => response.value));
  // }

  searchRepairsByVatNumber(vatNumber: string): Observable<IRepairs[]> {
    let params = new HttpParams().set('vatNumber', vatNumber);
    return this.http
      .get<ApiResponse2>(`${this.apiUrl}/search-by-vat`, { params })
      .pipe(
        map((response) =>
          response.value.map((repair) => ({
            ...repair,
            status: statusTypeToString(repair.status as unknown as StatusType),
            repairType: repairTypeToString(repair.repairType as unknown as RepairType),
            userType: userTypeToString(repair.propertyOwnerDto.userType as unknown as UserType),
            // propertyType: propertyTypeToString(repair.propertyOwnerDto.propertyItems[0].propertyType as unknown as PropertyType)
          }))
        ),
      );
  }

  // searchRepairsByDate(dateTime: string): Observable<IRepairs[]> {
  //   let params = new HttpParams().set('date', dateTime);
  //   return this.http
  //     .get<ApiResponse2>(`${this.apiUrl}/search-by-date`, { params })
  //     .pipe(map((response) => response.value));
  // }

  searchRepairsByDate(dateTime: string): Observable<IRepairs[]> {
    let params = new HttpParams().set('date', dateTime);
    return this.http
      .get<ApiResponse2>(`${this.apiUrl}/search-by-date`, { params })
      .pipe(
        map((response) =>
          response.value.map((repair) => ({
            ...repair,
            status: statusTypeToString(repair.status as unknown as StatusType),
            repairType: repairTypeToString(repair.repairType as unknown as RepairType),
            userType: userTypeToString(repair.propertyOwnerDto.userType as unknown as UserType),
            // propertyType: propertyTypeToString(repair.propertyOwnerDto.propertyItems[0].propertyType as unknown as PropertyType)
          }))
        )
      );
  }

  createRepair(repair: IRepairs): Observable<IRepairs[]> {

    const { id, ...repairPayload } = repair;

    const repairToSend = {
      ...repairPayload,
      status: stringToStatusType(repair.status),
      repairType: stringToRepairType(repair.repairType),
      userType: userTypeToString(repair.propertyOwnerDto.userType as unknown as UserType),
      // propertyType: propertyTypeToString(repair.propertyOwnerDto.propertyItems[0].propertyType as unknown as PropertyType)
    };

    return this.http.post<ApiResponse>(this.apiUrl, repairToSend).pipe(
      map((response: any) => ({
        ...response,
        status: statusTypeToString(response.status),
        repairType: repairTypeToString(response.repairType),
        userType: userTypeToString(repair.propertyOwnerDto.userType as unknown as UserType),
        // propertyType: propertyTypeToString(repair.propertyOwnerDto.propertyItems[0].propertyType as unknown as PropertyType)
      }))
    );
  }

  updateRepairStatus(repair: IRepairs): Observable<IRepairs> {
    const repairToSend = {
      ...repair,
      status: stringToStatusType(repair.status),
      repairType: stringToRepairType(repair.repairType),
      userType: userTypeToString(repair.propertyOwnerDto.userType as unknown as UserType),
      // propertyType: propertyTypeToString(repair.propertyOwnerDto.propertyItems[0].propertyType as unknown as PropertyType)
    };
    const url = `${this.apiUrl}/${repair.id}`;

    return this.http.put<IRepairs>(url, repairToSend);
  }
}
