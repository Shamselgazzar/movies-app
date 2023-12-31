import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard] 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
