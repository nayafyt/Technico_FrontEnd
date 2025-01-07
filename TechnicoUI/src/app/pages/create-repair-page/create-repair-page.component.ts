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
  styleUrls: ['./create-repair-page.component.scss']
})
export class CreateRepairPageComponent {
  repair: IRepairs = {
    date: '',
    repairType: '',
    description: '',
    address: '',
    status: 'in progress',
    cost: 0,
    owner: '',
    title: '',
    location: '',
    userId: ''
  };

  constructor(private repairsService: RepairsService, private router: Router) {}

  onSubmit(): void {
    this.repairsService.createRepair(this.repair).subscribe(
      (newRepair) => {
        console.log('Repair created:', newRepair);
        this.router.navigate(['/admin-homepage/repairs']);
      }
    );
  }
}