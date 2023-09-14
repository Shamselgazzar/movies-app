import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Replace with your authentication service

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  isLoggedIn !: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.authService.isAuthenticatedCheck().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
    if (this.isLoggedIn) {

      this.router.navigate([localStorage.getItem('currentUrl')]);
      return false;
    }

    return true;
  }
}
