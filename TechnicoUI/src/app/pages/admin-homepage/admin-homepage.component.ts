import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-admin-homepage',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './admin-homepage.component.html',
  styleUrl: './admin-homepage.component.scss'
})
export class AdminHomepageComponent {

}
