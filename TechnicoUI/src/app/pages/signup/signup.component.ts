import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private router: Router) {}

  signUp() {
    if (this.signUpForm.valid) {
      const { email, password, confirmPassword } = this.signUpForm.value;

      if (password !== confirmPassword) {
        console.error('Passwords do not match!');
        return;
      }

      this.http.post('http://localhost:5001/users', { email, password, confirmPassword }).subscribe({
        next: (response) => {
          console.log('Sign Up successful:', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Sign Up failed:', err);
        }
      });
    }
  }

}
