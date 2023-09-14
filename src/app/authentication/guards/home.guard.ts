import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard  {

  isLoggedIn = localStorage.getItem('isLoggedIn')==="true";

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.isAuthenticatedCheck().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
    
    if (this.isLoggedIn) {
      console.log("authGuard says hi");
      return true;
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }
}
