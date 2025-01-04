import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { PropertyOwnerService } from '../../../services/property-owner.service';
import { CommonModule } from '@angular/common';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-user-search-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-search-page.component.html',
  styleUrl: './user-search-page.component.scss',
})
export class UserSearchPageComponent {
  propertyOwner: IPropertyOwner[] = [];
  filteredPropertyOwner: IPropertyOwner[] = [];
  paginatedPropertyOwner: IPropertyOwner[] = [];

  isLoading = true;

  constructor(
    private propertyOwnerService: PropertyOwnerService,
    private paginationService: PaginationService
  ) {}

  searchCriteria = {
    vat: '',
    email: '',
  };

  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  ngOnInit(): void {
    this.propertyOwnerService.getPropertyOwners().subscribe((data) => {
      this.propertyOwner = data;
      this.filteredPropertyOwner = [];
      this.isLoading = false;
    });
  }

  searchRepairs(): void {
    const { vat, email } = this.searchCriteria;

    let results = [...this.propertyOwner];

    if (!vat && !email) {
      this.filteredPropertyOwner = [];
      return;
    }

    if (vat) {
      results = results.filter((user) => user.vat === vat);
    }

    if (email) {
      results = results.filter((user) => user.email === email);
    }

    this.filteredPropertyOwner = results;
  }
}
