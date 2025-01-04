import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IRepairs } from '../../models/irepairs';
import { RepairsService } from '../../../services/repairs.service';
import { PaginationService } from '../../../services/pagination.service';
import { IRepairsOngoing } from '../../models/irepairsOngoing';
import { RepairsOngoingService } from '../../../services/repairs-ongoing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  repairs: IRepairsOngoing[] = [];
  filteredRepairs: IRepairsOngoing[] = [];
  paginatedRepairs: IRepairsOngoing[] = [];

  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  constructor(
    private repairsOngoing: RepairsOngoingService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.repairsOngoing.getRepairs().subscribe((data) => {
      console.log('Fetched repairs:', data);
      this.repairs = data;
      this.filteredRepairs = [...this.repairs];
      console.log(1111, this.filteredRepairs);
      this.updatePagination();
    });
  }

  updatePagination(): void {
    const { paginatedItems, totalPages } = this.paginationService.paginate(
      this.filteredRepairs,
      this.currentPage,
      this.itemsPerPage
    );
    console.log('Paginated items:', paginatedItems);
    console.log('Total pages:', totalPages);
    this.paginatedRepairs = paginatedItems;
    this.totalPages = totalPages;
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPagesList(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
