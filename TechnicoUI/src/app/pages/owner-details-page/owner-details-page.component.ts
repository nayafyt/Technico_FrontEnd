import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PropertyOwnerService } from '../../../services/property-owner.service';

@Component({
  selector: 'app-owner-details-page',
  imports: [CommonModule],
  templateUrl: './owner-details-page.component.html',
  styleUrls: ['./owner-details-page.component.scss']
})
export class OwnerDetailsPageComponent implements OnInit {
  vatNumber: string | null = null; // VAT number from the route
  owner: any = null; // Object to hold the owner's details

  constructor(
    private route: ActivatedRoute,
    private ownerService: PropertyOwnerService
  ) {}

  ngOnInit(): void {
    // Use paramMap Observable to fetch VAT number
    this.route.paramMap.subscribe((params) => {
      this.vatNumber = params.get('vat');
      if (this.vatNumber) {
        this.fetchOwnerDetails(this.vatNumber);
      } else {
        console.error('VAT number not provided in the route');
      }
    });
  }

  // Fetch owner's data using the service
  fetchOwnerDetails(vatNumber: string): void {
    this.ownerService.getOwnerByVat(vatNumber).subscribe(
      (response) => {
        console.log('API Response:', response); // Log the full response for debugging
        if (response) {
          this.owner = response; // Directly assign the response to `this.owner`
          console.log('Owner Details:', this.owner); // Log the owner details to confirm
        } else {
          console.error('Invalid API Response:', response); // Log if the response is null or undefined
        }
      },
      (error) => {
        console.error('Error fetching owner data:', error); // Handle API or network errors
      }
    );
  }
}
