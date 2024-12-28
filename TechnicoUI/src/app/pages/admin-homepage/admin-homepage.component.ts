import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterOutlet],
  templateUrl: './admin-homepage.component.html',
  styleUrl: './admin-homepage.component.scss',
})
export class AdminHomepageComponent {}
