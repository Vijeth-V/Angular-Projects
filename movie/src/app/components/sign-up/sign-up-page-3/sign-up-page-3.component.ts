import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Inject } from '@angular/core';
import { UserRole } from '../../../core/interfaces/movie';

@Component({
  selector: 'app-sign-up-page-3',
  standalone: false,
  templateUrl: './sign-up-page-3.component.html',
  styleUrls: ['./sign-up-page-3.component.css'],
})
export class SignUpPage3Component {
  selectedPlan: string | null = null;

  selectedColumn: 'USER' | 'SUPERUSER' | 'ADMIN' = 'USER';

  rowData = [
    {
      title: 'Monthly Price',
      basic: '$9.99',
      standard: '$15.49',
      premium: '$19.99',
    },
    {
      title: 'Video Quality',
      basic: 'Good',
      standard: 'Better',
      premium: 'Best',
    },
    {
      title: 'Resolution',
      basic: '480p',
      standard: '1080p',
      premium: '4K + HDR',
    },
    {
      title: 'Watch on your TV, computer, mobile phone and tablet',
      basic: '✔',
      standard: '✔',
      premium: '✔',
    },
  ];

  constructor(
    private router: Router,
    @Inject(AuthService) private authService: AuthService
  ) {}

  selectPlan(user: 'USER' | 'SUPERUSER' | 'ADMIN') {
    this.selectedColumn = user;
  }

  navigateToMovielist() {
    const jwtToken = localStorage.getItem('access_token');

    if (jwtToken) {
      this.authService.updateUserRole(this.selectedColumn as UserRole).subscribe(() => {
            console.log('User role updated successfully');
            this.router.navigate(['/movies']);
          },
          (error) => {
            console.error('Error updating role:', error);
          }
        );
    } else {
      this.authService.signup().subscribe(
        () => {
          console.log('Signup completed successfully');
          this.router.navigate(['/movies']);
        },
        (error) => {
          console.error('Error during signup:', error);
        }
      );
    }
  }
}
