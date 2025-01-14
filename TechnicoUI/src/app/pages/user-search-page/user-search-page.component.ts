import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { PropertyOwnerService } from '../../../services/property-owner.service';
import { CommonModule } from '@angular/common';
import { PaginationService } from '../../../services/pagination.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-user-search-page',
  imports: [FormsModule, CommonModule,HttpClientModule,RouterLink],
  templateUrl: './user-search-page.component.html',
  styleUrl: './user-search-page.component.scss',
})
export class UserSearchPageComponent {
  propertyOwner: IPropertyOwner[] = [];
  filteredPropertyOwner: IPropertyOwner[] = [];
  paginatedPropertyOwner: IPropertyOwner[] = [];

  isLoading = true;
  searchCriteria = {
    vatNumber: '',
    email: '',
  };
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;
  
   
  constructor(
    private propertyOwnerService: PropertyOwnerService,
    private paginationService: PaginationService,
    private searchService : SearchService,
    private http:HttpClient
  ) {}
  ngOnInit(): void {
    this.searchService.getPropertyOwners().subscribe({
      next: (owners) => {
        console.log('Fetched property owners:', owners);
        this.propertyOwner = owners;
        this.filteredPropertyOwner = [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching property owners:', error);
        this.isLoading = false;
      },
    });
  }

  searchOwners(): void {
    const { vatNumber, email } = this.searchCriteria;

    let results = [...this.propertyOwner];

    if (!vatNumber && !email) {
      this.filteredPropertyOwner = [];
      return;
    }

    if (vatNumber) {
      results = results.filter((user) => user.vatNumber === vatNumber);
    }

    if (email) {
      results = results.filter((user) => user.email === email);
    }

    this.filteredPropertyOwner = results;
  }

  
}