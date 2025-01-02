import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  paginate<T>(items: T[], currentPage: number, itemsPerPage: number): { paginatedItems: T[], totalPages: number } {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginatedItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    return { paginatedItems, totalPages };
  }
}