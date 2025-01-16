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
    vatNumber: '',
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
      console.log(1111,data);
      this.repairs = data;
      this.filteredRepairs = [...this.repairs];
      this.updatePagination();
    });
  }

  searchRepairs(): void {
    const { startDate, endDate, vatNumber } = this.searchCriteria;

    let results = [...this.repairs];

    if (startDate) {
      this.repairsService.searchRepairsByDate(startDate).subscribe(
        (data: IRepairs[]) => {
          this.filteredRepairs = data;
          this.updatePagination();
        }
      );
    }

    // if (endDate) {
    //   results = results.filter(
    //     (repair) => new Date(repair.sceduleDate).getTime() <= new Date(endDate).getTime()
    //   );
    // }

    if (vatNumber) {
      this.repairsService.searchRepairsByVatNumber(vatNumber).subscribe(
        (data: IRepairs[]) => {
          this.filteredRepairs = data;
          this.updatePagination();
        }
      );
    }

    this.filteredRepairs = results;

    this.router.navigate(['/admin-homepage/search-results-page'], {
      queryParams: { startDate, vatNumber },
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
  updateRepairStatus(repair: IRepairs, status: string) {
    repair.status = status;
    console.log(111111,repair)
    this.repairsService
      .updateRepairStatus(repair)
      .subscribe((updatedRepair) => {
        console.log('Repair status updated:', updatedRepair);
      });
  }
}
