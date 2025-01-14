import { Component, OnInit } from '@angular/core';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { PropertyOwnerService } from '../../../services/property-owner.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent, PageItemDirective, PageLinkDirective],
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.scss'],
})
export class OwnerPageComponent implements OnInit {
  propertyOwners: IPropertyOwner[] = [];
  paginatedPropertyOwners: IPropertyOwner[] = [];
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  constructor(private propertyOwnerService: PropertyOwnerService) {} 
  //.next method

  ngOnInit(): void {
    this.propertyOwnerService.getPropertyOwners().subscribe(
      (data) => {
        console.log('Fetched property owners:', data);
        this.propertyOwners = data;
        this.calculatePagination();
      },
      (error) => {
        console.error('Error fetching property owners:', error);
      }
    );
  }


  
  

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.propertyOwners.length / this.itemsPerPage);
    this.paginatedPropertyOwners = this.propertyOwners.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
    console.log('Current page data:', this.paginatedPropertyOwners);
    console.log(`Page ${this.currentPage} of ${this.totalPages}`);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      console.warn('Invalid page:', page);
      return;
    }
    this.currentPage = page;
    this.calculatePagination();
  }

  get totalPagesList(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
