import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    TranslateModule
  ],
  exports: [
    
  ]
})
export class AuthenticationModule { }
