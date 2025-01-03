import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { PropertyOwnerService } from '../../../services/property-owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-owner',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class CreateOwnerComponent {

  propertyOwners: IPropertyOwner = {
    vat: '',
    name: '',
    surname: '',
    address: '',
    phoneNumber: 0,
    email: '',
    password: '',
    typeOfUser: '',
    
  };

  constructor(private propertyOwnersService: PropertyOwnerService, 
    private router: Router) {}

  onSubmit(): void {
    this.propertyOwnersService.createPropertyOwner(this.propertyOwners).subscribe(
      (newpropertyOwner) => {
        console.log('Property Owner created:', newpropertyOwner);
        this.router.navigate(['/admin-homepage/owner-management']);
      },
      (error) => {
        console.error('Error creating property owner:', error);
      }
    );
  }
}
