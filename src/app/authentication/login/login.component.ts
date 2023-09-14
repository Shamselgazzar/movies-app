import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{

  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService : AuthService,
    private router : Router
    ){}

  // form submit function
  onSubmit(form: NgForm){
    console.log('Form submitting...');
    console.log(form);
    this.email = form.value.email;
    this.password = form.value.password;
    console.log('Form is submitted...');
    this.login(form.value.email, form.value.password);
    form.reset();
    
  }

  // used in the onSubmit function
  async login(email: any, password:any) {
    try{
      console.log('Logging in...');
      const isAuthenticated = await this.authService.authenticate(email, password);
      if (isAuthenticated) {
        // handle successful login
        console.log('User is authenticated.');
        this.router.navigate(['/home']);
      } else {
        // hhandle failed login
        console.log('Authentication failed. Please check your credentials.');
        this.errorMessage = 'Authentication failed. Please check your credentials.';
      }
    }catch{
      console.log('The login process failed.');
    }
  }

}
