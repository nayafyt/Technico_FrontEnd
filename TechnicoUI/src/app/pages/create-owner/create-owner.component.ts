import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPropertyOwner } from '../../models/iproperty-owner'; // Ensure the correct path
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyOwnerService } from '../../../services/property-owner.service';

@Component({
  selector: 'app-create-owner', 
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss'],
})
export class CreateOwnerComponent implements OnInit {
  form!: FormGroup;
  userType = [{
    label: 'User', value: 0}, 
    {label: 'Admin', value: 1}
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private propertyOwnerService: PropertyOwnerService
  ) {
    this.form = this.fb.group({
     vatNumber: ['', [Validators.required, Validators.pattern('[0-9A-Za-z]{1,10}')]],
      name: ['', [Validators.required,Validators.pattern('^[a-z]+$')]],
      surname: ['', [Validators.required,Validators.pattern('^[a-z]+$')]],
      address: ['', [Validators.required,Validators.pattern('^[a-z0-9\s]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    console.log('CreateOwnerComponent initialized');
  }
  onSubmit(): void {
    console.log(this.form.value);
    
    if (this.form.valid) {
      const propertyOwner: IPropertyOwner = {
        ...this.form.value,
        userType: Number(this.form.get("userType")?.value),
        id: '' 
      };

      this.propertyOwnerService.createPropertyOwners(propertyOwner).subscribe({
        next: (response) => {
          console.log('Property Owner created successfully:', response);
          this.router.navigate(['/admin-homepage/owner-management']);
        },
        error: (error) => {
          console.error('Error creating property owner:', error);
        }
      });
    } else {
      this.markFormGroupTouched(this.form);
    }
  }
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  getControlError(controlPath: string, errorType: string): boolean {
    const control = this.form.get(controlPath);
    return !!control?.touched && !!control?.hasError(errorType);
  }
}
