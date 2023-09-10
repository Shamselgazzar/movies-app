import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  @ViewChild('f') myform !: NgForm;


  constructor(private authService : AuthService, private router : Router){}

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
    this.authService.setLoggedIn(true);
    this.router.navigate(['/home']);
    } 
  }
  
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
