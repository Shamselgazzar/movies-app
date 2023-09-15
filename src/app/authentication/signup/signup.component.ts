import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  signUp(form: NgForm){
    this.email = form.value.email;
    this.password = form.value.password;

    const isAuthenticated = this.authService.isAuthenticatedCheck();
      if (isAuthenticated) {
        console.log('User is authenticated.');
        this.router.navigate(['/home']);
      } else {
        console.log('Authentication failed. Please check your credentials.');
        this.errorMessage = 'Authentication failed. Please check your credentials.';
      }

  }

}
