import { Component } from '@angular/core';
import { AdminHomepageComponent } from "./pages/admin-homepage/admin-homepage.component";

@Component({
  selector: 'app-root',
  imports: [AdminHomepageComponent], //RouterOutlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechnicoUI';
}
