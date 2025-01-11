import { Component, OnInit } from '@angular/core';
import { IPropertyItems } from '../../models/iproperty-items';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';
import { PropertiesService } from '../../../services/properties.service';

@Component({
  selector: 'app-property-owners',
  standalone: true,
  imports: [CommonModule, PaginationComponent, PageItemDirective, PageLinkDirective, RouterLink],
  templateUrl: './property-owners.component.html',
  styleUrls: ['./property-owners.component.scss'],
})
export class PropertyOwnersComponent implements OnInit {
  properties: IPropertyItems[] = []; 
  paginatedProperties: IPropertyItems[] = [];
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  constructor(private propertiesService: PropertiesService) {}
//.nextmethod
  ngOnInit(): void {
    this.propertiesService.getProperties().subscribe(
      (data: IPropertyItems[]) => {
        this.properties = data; 
        this.calculatePagination(); 
        console.log('Fetched properties:', this.properties);
      },
      (error) => {                                            //.Next method gia to error 
        console.error('Error fetching properties:', error);
      }
    );
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.properties.length / this.itemsPerPage);
    this.paginatedProperties = this.properties.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.calculatePagination();
  }

  get totalPagesList(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
