import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../../../services/repairs.service';
import { IRepairs } from '../../models/irepairs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertyType } from '../../../enums/enums';
import {
  propertyTypeToString,
  stringToPropertyType,
} from '../../../utils/enum-utils';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-repair-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-repair-page.component.html',
  styleUrls: ['./create-repair-page.component.scss'],
})
export class CreateRepairPageComponent implements OnInit {
  form!: FormGroup;

  propertyType = [
    { label: 'Detached House', value: 0 },
    { label: 'Maisonete', value: 1 },
    { label: 'Apartment', value: 2 },
  ];

  repairType = [
    { label: 'Painting', value: 0 },
    { label: 'Insulation', value: 1 },
    { label: 'Frames', value: 2 },
    { label: 'Plumbing', value: 3 },
    { label: 'Electrical Work', value: 4 },

  ];

  constructor(
    private repairsService: RepairsService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      repairType: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      dateTime: ['', Validators.required],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      propertyItemDto: this.fb.group({
        propertyIdentificationNumber: ['', Validators.required],
        propertyAddress: ['', Validators.required],
        propertyOwnerVatNumber: ['', Validators.required],
        propertyType: ['', Validators.required],
        yearOfConstruction: ['', [
          Validators.required,
          Validators.pattern('^[0-9]{4}$')
        ]],
      })
    });
  }

  repair: IRepairs = {
    id: 0,
    dateTime: '',
    repairType: '',
    description: '',
    address: '',
    cost: 0,
    status: 'pending',
    propertyItemDto: {
      propertyIdentificationNumber: '',
      address: '',
      yearOfConstruction: 0,
      propertyType: '',
      propertyOwnerVatNumber: '',
      propertyRepairDtos: [],
    },
  };

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.repair = {
      ...this.form.value,
      status: 'pending',
      repairType: Number(this.form.get('repairType')?.value),
      propertyItemDto: {
        ...this.form.get('propertyItemDto')?.value,
        propertyType: Number(this.form.get('propertyItemDto')?.get('propertyType')?.value),
      },
    };

    console.log(22222,this.repair);

    this.repairsService.createRepair(this.repair).subscribe({
      next: (newRepair) => {
        console.log('Repair created:', newRepair);
        this.router.navigate(['/admin-homepage/repairs']);
      },
      error: (err) => {
        console.error('Failed to create repair:', err);
      },
    });
  }
}