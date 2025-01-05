import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  loading = false;
  successMessage = '';
  errorMessage = '';
  mockToken: any;


  constructor(private http: HttpClient, private router: Router) {}

  resetPassword() {
    if (this.forgotPasswordForm.valid) {
      const { email } = this.forgotPasswordForm.value;
      this.loading = true;

      this.http.post('http://localhost:5001/users', { email }).subscribe({
        next: (response) => {
          console.log('Reset password link sent:', response);
          this.successMessage = 'A password reset link has been sent to your email.';

          this.mockToken = 'mocked-token-12345';

          this.router.navigate(['/reset-password', this.mockToken]);
        },
        error: (err) => {
          console.error('Failed to send reset link:', err);
          this.errorMessage = 'Failed to send reset link. Please try again later.';
        },
      });
    }
  }
}
