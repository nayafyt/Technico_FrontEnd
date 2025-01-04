import { Component, OnInit } from '@angular/core';
import { IPropertyOwner } from '../../models/iproperty-owner';
import { ActivatedRoute } from '@angular/router';
import { PropertyOwnerService } from '../../../services/property-owner.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-owner-page',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './edit-owner-page.component.html',
  styleUrls: ['./edit-owner-page.component.scss']
})
export class EditOwnerPageComponent implements OnInit {
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
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertyOwnerService: PropertyOwnerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const vat = params.get('vat');
      if (vat) {
        this.loadPropertyOwner(vat);
        this.isEditing = true;
      } else {
        this.isEditing = false;
      }
    });
  }
  loadPropertyOwner(vat: string): void {
    this.propertyOwnerService.getPropertyOwners().subscribe(
      (owners) => {
        const owner = owners.find((o) => o.vat === vat);
        if (owner) {
          this.propertyOwners = { ...owner }; 
        }
      },
      (error) => {
        console.error('Error fetching property owner:', error);
      }
    );
    console.log("fetch" ,vat);
  }
  saveChanges(): void {
    if (this.isEditing) {
      this.propertyOwnerService.updatePropertyOwner(this.propertyOwners).subscribe(
        () => {
          console.log('Property Owner updated successfully.');
          this.router.navigate(['/admin-homepage/owner-management']);
        },
        (error) => {
          console.error('Error updating property owner:', error);
        }
      );
    }
  }
  deleteOwner(): void{
    if (confirm('Are you sure you want to delete this property owner?')){
      this.propertyOwnerService.deleteOwner(this.propertyOwners.vat).subscribe(
        ()=>{
          console.log('Property owner deleted sucessfully');
          alert('Property owner deleted');
          this.router.navigate(['/admin-homepage/owner-management']);
        },
        (error) => {
          console.error('Error Deleting property Owner', error);
          alert('Failed to delete the property Owner');
        }
      );
    }
  }
}
