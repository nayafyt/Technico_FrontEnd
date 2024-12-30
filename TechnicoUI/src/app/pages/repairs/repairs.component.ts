import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../../../services/repairs.service';
import { IRepairs } from '../../../models/irepairs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-repairs',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss'],
})
export class RepairsComponent implements OnInit {
  repairs: IRepairs[] = [];
  filteredRepairs: IRepairs[] = [];
  searchCriteria = {
    startDate: '',
    endDate: '',
    userId: '',
  };

  constructor(private repairsService: RepairsService) {}

  ngOnInit(): void {

    this.repairsService.getRepairs().subscribe((data) => {
      this.repairs = data;
      this.filteredRepairs = [];
    });
  }

  searchRepairs(): void {
    const { startDate, endDate, userId } = this.searchCriteria;
  
    let results = [...this.repairs];
  
    if (!startDate && !endDate && !userId) {
      this.filteredRepairs = [];
      return;
    }
  
    if (startDate) {
      results = results.filter(
        (repair) => new Date(repair.sceduleDate).getTime() === new Date(startDate).getTime()
      );
    }
  
    // if (endDate) {
    //   results = results.filter(
    //     (repair) => new Date(repair.sceduleDate).getTime() <= new Date(endDate).getTime()
    //   );
    // }
  
    if (userId) {
      results = results.filter((repair) =>
        repair.userId === userId
      );
    }
  
    this.filteredRepairs = results;
  }
}