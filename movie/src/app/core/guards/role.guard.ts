import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { UserRole } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class roleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser  = this.authService.userSubject.getValue();
    const movieId = route.paramMap.get('id');
    console.log('Movie ID:', movieId);

    if (currentUser?.jwtToken && (currentUser.role === UserRole.ADMIN || currentUser.role === UserRole.SUPERUSER)) {
      return true;
    }
    this.router.navigate(['/signup/step3']);
    return false;
  }
}
