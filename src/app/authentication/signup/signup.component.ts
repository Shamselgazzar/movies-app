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
  errorMessage = '';

  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  async signUp(form: NgForm){

    this.errorMessage  = await this.authService.signUp(form.value.email, form.value.password);

    form.reset();
  }

}
