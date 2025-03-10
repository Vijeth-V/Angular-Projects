import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sign-up-page-2',
  standalone: false,
  templateUrl: './sign-up-page-2.component.html',
  styleUrl: './sign-up-page-2.component.css'
})
export class SignUpPage2Component {

  signup2form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, @Inject(AuthService) private authService: AuthService) { }

  ngOnInit(): void {
    this.signup2form = this.fb.group({
      username: ['', [Validators.required]],
      tmdb: ['', [Validators.required]],
    });
  }

  navigateToSignUp3() {

    if (this.signup2form.valid) {
      const { username, tmdb } = this.signup2form.value;
      this.authService.addSignupData('username', username);
      this.authService.addSignupData('tmdb', tmdb);
      this.router.navigate(['/signup/step3']);
    } else {
      alert('Please complete the form with valid data.');
    }
  }
}
