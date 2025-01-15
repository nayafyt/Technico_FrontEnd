import { Component, OnInit } from '@angular/core';
import { IPropertyItems } from '../../models/iproperty-items';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';
import { PropertiesService } from '../../../services/properties.service';
import { PaginationService } from '../../../services/pagination.service';

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
  totalPages: number[] = [];

  propertyTypes = {
    0: 'Detached house',
    1: 'Maisonet',
    2: 'Apartment',
    
  } as const;

  constructor(
    private propertiesService: PropertiesService, 
    private paginationService: PaginationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = Number(params['page']) || 1;
      this.loadProperties();
    });
  }

  private loadProperties(): void {
    this.propertiesService.getProperties().subscribe(
      (data: IPropertyItems[]) => {
        this.properties = data;
        const paginationResult = this.paginationService.paginate(this.properties, this.currentPage, this.itemsPerPage);
        this.paginatedProperties = paginationResult.paginatedItems;
        this.totalPages = Array.from({ length: paginationResult.totalPages }, (_, i) => i + 1);
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages.length) {
      console.warn('Invalid page:', page);
      return;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
      preserveFragment: true
    });
  }

  getPropertyTypeString(type: number): string {
    return this.propertyTypes[type as keyof typeof this.propertyTypes] || 'Unknown';
  }
}