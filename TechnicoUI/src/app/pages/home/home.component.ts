import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  isLoading: boolean = true;
  repairs: any[] = [];
   ngOnInit(): void {
       setTimeout(() => {
    this.repairs = [
    {
     title: 'Painting',
     date: '29.12.24',
     location: 'Athens',
     cost: 220,
     owner: 'Alex Johnson',
     description: 'This is a detailed description of the ongoing painting repair.',
     status: 'In Progress' 
    }, 
    {
     title: 'Plumbing',
     date: '29.12.24',
     location: 'Athens',
     cost: 50,
     owner: 'Maria Lopez',
     description: 'This is a detailed description of the ongoing plumbing repair.',
     status: 'Scheduled'
    },
    {
    title: 'Electrical Wiring',
    date: '22.12.24',
    location: 'Athens',
    cost: 60,
    owner: 'Daniel Craig',
    description: 'This is a detailed description of the ongoing electrical wiring repair.',
    status: 'Completed'
    }
     ];
      this.isLoading = false; 
    }, 0); 
  }
}
