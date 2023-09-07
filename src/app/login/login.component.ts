import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  email: string = '';
  password: string = '';
  @ViewChild('f') myform !: NgForm;


  constructor(private authService : AuthService){}
  
  async login(email: any, password:any) {
    try{
      console.log('Logging in...');
      const isAuthenticated = await this.authService.authenticate(email, password);
      if (isAuthenticated) {
        // handle successful login
        console.log('User is authenticated.');
      } else {
        // hhandle failed login
        console.log('Authentication failed. Please check your credentials.');
      }
    }catch{
      console.log('The login process failed.');
    }
  }

  onSubmit(form: NgForm){
    console.log('Form submitting...');
    console.log(form);
    this.email = form.value.email;
    this.password = form.value.password;
    console.log('Form is submitted...');
    this.login(form.value.email, form.value.password);
    form.reset();
  }
  
  
}
