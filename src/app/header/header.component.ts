import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isLoggedIn !: Boolean;
  isNewUser : Boolean = true;
  

  constructor(private authService: AuthService){}

 
  

 
}