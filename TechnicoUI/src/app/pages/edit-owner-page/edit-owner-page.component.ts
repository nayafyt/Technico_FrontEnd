import { Component, OnInit } from '@angular/core';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyOwnerService } from '../../../services/property-owner.service';

@Component({
  selector: 'app-edit-owner-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-owner-page.component.html',
  styleUrls: ['./edit-owner-page.component.scss'],
})
export class EditOwnerPageComponent implements OnInit {
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
  typesOfUser = ['User', 'Admin'];
  isEditing = false;
  form!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private propertyOwnerService: PropertyOwnerService
  ) {
    this.form = this.fb.group({
      vatNumber: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      typeOfUser: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log('All params:', params);  
      const vat = params.get('vat');
      console.log('VAT retrieved from route:', vat);
      if (vat) {
        console.log('Editing owner with VAT:', vat);
        this.loadPropertyOwner(vat);
        this.isEditing = true;
      } else {
        console.error('VAT not found in route');
        this.isEditing = false;
      }
    });
  }
  
  loadPropertyOwner(vat: string): void {
    this.propertyOwnerService.getPropertyOwners().subscribe({
      next: (owners) => {
        const owner = owners.find((o) => o.vatNumber === vat);
        if (owner) {
          this.propertyOwner = owner;
          this.form.patchValue(this.propertyOwner);
          console.log('Loaded property owner:', owner); 
        } else {
          console.error('Owner not found');
        }
      },
      error: (err) => {
        console.error('Error loading property owner:', err);
      },
    });
  }
  saveChanges(): void {
    if (this.form.valid) {
      const updatedOwner: IPropertyOwner = {
        ...this.form.value,
        id: this.propertyOwner.id  
      };

      this.propertyOwnerService.updatePropertyOwner(updatedOwner).subscribe({
        next: (response) => {
          console.log('Property owner updated successfully:', response);
          alert('Property owner updated successfully!');
          this.router.navigate(['/admin-homepage/owner-management']);
        },
        error: (err) => {
          console.error('Error updating property owner:', err);
          alert('Error updating the property owner. Please try again.');
        },
      });
    } else {
      alert('Please ensure all fields are filled out correctly.');
    }
  }
  
  
    deletePropertyOwner(): void {
      if (confirm('Are you sure you want to delete this property owner?')){
      this.propertyOwnerService.deletePropertyOwner(this.propertyOwner).subscribe({
        next: (response2) => {
          console.log('Property owner deleted successfully:', response2);
          alert('Property owner deleted successfully!');
          this.router.navigate(['/admin-homepage/owner-management']);
        },
        error: (err) => {
          console.error('Error delete property owner:', err);
          alert('Error delete the property owner. Please try again.');
        }
      });}
    }
     }
