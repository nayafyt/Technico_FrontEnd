import { Component, OnInit } from '@angular/core';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { PropertyOwnerService } from '../../../services/property-owner.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-owner-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent implements OnInit {
  propertyowner: IPropertyOwner[] = [];

  constructor(private propertyOwnerService: PropertyOwnerService) {}

  ngOnInit(): void {
    this.propertyOwnerService.getPropertyOwners().subscribe((data) => {
      this.propertyowner = data;
    });
  }
}
