import { Component } from '@angular/core';
import { RepairsService } from '../../../services/repairs.service';
import { IRepairs } from '../../models/irepairs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-repair-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-repair-page.component.html',
  styleUrls: ['./create-repair-page.component.scss'],
})
export class CreateRepairPageComponent {
  repair: IRepairs = {
    dateTime: '',
    repairType: '',
    description: '',
    address: '',
    cost: 0,
    status: 'pending',
    propertyOwnerDto: {
      vatNumber: 0, // !!!!!!
      address: '',
      name: '',
      surname: '',
      phoneNumber: '',
      email: '',
      password: '',
      userType: '',
      propertyItems: [
        {
          propertyIdentificationNumber: '',
          address: '',
          yearOfConstruction: 0,
          propertyType: '',
          propertyOwnerVatNumber: '', // !!!!!!!
        }
      ],
      propertyRepairs: []
    },
  };

  constructor(private repairsService: RepairsService, private router: Router) {}

  onSubmit(): void {
    this.repairsService.createRepair(this.repair).subscribe({
      next: (newRepair) => {
        console.log('Repair created:', newRepair);
        this.router.navigate(['/admin-homepage/repairs']);
      },
      error: (err) => {
        console.error('Failed to create repair:', err.error);
      },
    });
  }
}
