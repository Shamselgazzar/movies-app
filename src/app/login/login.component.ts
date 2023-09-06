import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  email: string = '';
  password: string = '';

  constructor(private authService : AuthService){}
  
  async login() {
    console.log(this.email+' '+this.password);
    
    const isAuthenticated = await this.authService.authenticate(this.email, this.password);

    if (isAuthenticated) {
      // Redirect or perform actions for successful login
      console.log('User is authenticated.');
    } else {
      // Handle failed login
      console.log('Authentication failed. Please check your credentials.');
    }
  }

  onSubmit(){
    //console.log(usersData);
  }
  
  
}
