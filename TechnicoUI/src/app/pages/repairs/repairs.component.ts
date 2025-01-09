import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../../../services/repairs.service';
import { IRepairs } from '../../models/irepairs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-repairs',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss'],
})
export class RepairsComponent implements OnInit {
  repairs: IRepairs[] = [];
  filteredRepairs: IRepairs[] = [];
  paginatedRepairs: IRepairs[] = [];
  searchCriteria = {
    startDate: '',
    endDate: '',
    userId: '',
  };
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  constructor(
    private repairsService: RepairsService,
    private paginationService: PaginationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.repairsService.getRepairs().subscribe((data: IRepairs[]) => {
      this.repairs = data;
      this.filteredRepairs = [...this.repairs];
      this.updatePagination();
    });
  }

  searchRepairs(): void {
    const { startDate, endDate, userId } = this.searchCriteria;

    let results = [...this.repairs];

    if (startDate) {
      results = results.filter(
        (repair) =>
          new Date(repair.date).getTime() === new Date(startDate).getTime()
      );
    }

    // if (endDate) {
    //   results = results.filter(
    //     (repair) => new Date(repair.sceduleDate).getTime() <= new Date(endDate).getTime()
    //   );
    // }

    if (userId) {
      results = results.filter((repair) => repair.userId === userId);
    }

    this.filteredRepairs = results;

    this.router.navigate(['/admin-homepage/search-results-page'], {
      queryParams: { startDate, userId },
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
  updateRepairStatus(repair: any, status: string) {
    repair.status = status;

    this.repairsService.updateRepairStatus(repair).subscribe((updatedRepair) => {
      console.log('Repair status updated:', updatedRepair);
    })
  }
}
