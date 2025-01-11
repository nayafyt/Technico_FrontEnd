import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPropertyOwner } from '../../models/iproperty-owner'; // Ensure the correct path
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyOwnerService } from '../../../services/property-owner.service';

@Component({
  selector: 'app-create-owner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss'],
})
export class CreateOwnerComponent implements OnInit {
  propertyOwner: IPropertyOwner = {
    vatNumber: '',
    name: '',
    surname: '',
    address: '',
    phoneNumber: 0,
    email: '',
    password: '',
    typeOfUser: '',
    id: ''
  };

  constructor(private router: Router, private http: HttpClient , private PropertyOwnerService: PropertyOwnerService)  {}

  ngOnInit(): void {
    console.log('CreateOwnerComponent initialized');
  }

  onSubmit(): void {
    this.PropertyOwnerService.createPropertyOwners(this.propertyOwner).subscribe({
      next: (response) => {
        console.log('Property Owner created successfully:', response);
        this.router.navigate(['/admin-homepage/owner-management']);
      },
      error: (err) => {
        console.error('Error creating property owner:', err);
      },
    });
  }
}
