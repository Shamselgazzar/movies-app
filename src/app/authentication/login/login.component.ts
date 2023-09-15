import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
    private router : Router,
    public translate : TranslateService
    ){
      
    }

  // form submit function
  onSubmit(form: NgForm){
    this.email = form.value.email;
    this.password = form.value.password;
    this.login(form.value.email, form.value.password);
    form.reset();
    
  }

  // used in the onSubmit function
  async login(email: any, password:any) {
    
    const isAuthenticated = await this.authService.authenticate(email, password);
    if (isAuthenticated) {
      
      this.router.navigate(['/home']);
    } else {
      
      this.errorMessage = 'Authentication failed. Please check your credentials.';
    }
    
  }

}
