import { Component } from '@angular/core';
import { AdminHomepageComponent } from "./pages/admin-homepage/admin-homepage.component";
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,CommonModule, AdminHomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechnicoUI';

  showImage: boolean = true;

  showLogo() {
    this.showImage = true;
  }

  hideLogo() {
    this.showImage = false;
  }

  onActivate(event: any) {
    this.hideLogo();
  }
}
