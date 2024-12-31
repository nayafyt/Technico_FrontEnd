import { Component,OnInit } from '@angular/core';
import { IPropertyItems } from '../../models/iproperty-items';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';

@Component({
  selector: 'app-property-owners',
  standalone: true,
  imports: [CommonModule,PaginationComponent,PageItemDirective,PageLinkDirective,RouterLink],
  templateUrl: './property-owners.component.html',
  styleUrl: './property-owners.component.scss'
})
export class PropertyOwnersComponent implements OnInit{
  properties: IPropertyItems[]=[];
  paginatedProperties:IPropertyItems[]=[];
  currentPage=1;
  itemsPerPage=3;
  totalPages=0;

  ngOnInit(): void {
    this.properties=[
      {
        Id:1,
        Address: 'Kallithea 10',
        YearOfConstruction: 1960,
        TypeOfProperty: 'Apartment building',
        Vat:'21746873'
      },
      {
        Id:2,
        Address: 'Aigaleo 10',
        YearOfConstruction: 1998,
        TypeOfProperty: 'Apartment building',
        Vat:'21746873'
      },
      {
        Id:3,
        Address: 'Alimos 10',
        YearOfConstruction: 2000,
        TypeOfProperty: 'Apartment building',
        Vat:'21746873'
      },
      {
        Id:4,
        Address: 'Kaisariani 10',
        YearOfConstruction: 2004,
        TypeOfProperty: 'Apartment building',
        Vat:'21746873'
      },
    ];
    this.calculatePagination();
  }

  calculatePagination(): void{
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
