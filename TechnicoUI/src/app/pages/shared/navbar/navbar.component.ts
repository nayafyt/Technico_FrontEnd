import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/admin-homepage/home']);
  }

  goToRepairs() {
    this.router.navigate(['/admin-homepage/repairs']);
  }

  goToPropertyOwners() {
    this.router.navigate(['/admin-homepage/property-owners']);
  }
}
