import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sign-up-page-1',
  standalone: false,
  templateUrl: './sign-up-page-1.component.html',
  styleUrl: './sign-up-page-1.component.css',
})

export class SignUpPage1Component implements OnInit {

  signUpForm: FormGroup;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    const email = sessionStorage.getItem('email');
    if (email) {
      this.signUpForm.patchValue({ email });
    }
  }

  navigateToSignUp2() {

    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;
      this.authService.addSignupData('email', email);
      this.authService.addSignupData('password', password);
      this.router.navigate(['/signup/step2']);
    } else {
      alert('Please complete the form with valid data.');
    }
  }
}

