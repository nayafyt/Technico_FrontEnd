import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';
import { IRepairs } from '../../models/irepairs';
import { RepairsService } from '../../../services/repairs.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  repairs: IRepairs[] = [];
  filteredRepairs: IRepairs[] = [];
  paginatedRepairs: IRepairs[] = [];
  
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  constructor(
    private repairsService: RepairsService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.repairsService.getRepairs().subscribe({
      next: (data: IRepairs[]) => {
        const filteredData = data
        .filter(
          (item) => item.status === 'in progress'
        );
        console.log('Filtered repairs:', filteredData);
        this.repairs = filteredData;
        this.filteredRepairs = [...this.repairs];
        this.updatePagination();
      },
      error: (err) => {
        console.error('Failed to fetch repairs:', err.error);
      },
    });
  }

  updatePagination(): void {
    const { paginatedItems, totalPages } = this.paginationService.paginate(
      this.filteredRepairs,
      this.currentPage,
      this.itemsPerPage
    );
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
