import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  onLogin() {

    if (this.loginForm.valid) {

      this.errorMessage = '';

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/movies']);
        },
        error: (err) => {
          this.errorMessage = err.message || 'An error occurred. Please try again.';
        },
      });
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/signup/step1']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

}
