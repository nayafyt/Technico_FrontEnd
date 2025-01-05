import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private router: Router, private http: HttpClient) {
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  login() {
    //call api with username and password
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.http.post('http://localhost:5001/users', { email, password }).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/admin-homepage']);
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      })
    }
  }
}
