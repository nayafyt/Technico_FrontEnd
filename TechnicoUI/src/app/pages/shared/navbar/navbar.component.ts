import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

  goToHome(): void {
    this.router.navigate(['/admin-homepage/home']);
  }

  goToRepairs(): void {
    this.router.navigate(['/admin-homepage/repairs']);
  }

  goToPropertyOwners(): void {
    this.router.navigate(['/admin-homepage/property-owners']);
  }

  isActive(url: string): boolean {
    return this.activeLink === url;
  }
}
