import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn !: Boolean;
  isNewUser : Boolean = true;
  private userSub !: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    // this.userSub = this.authService.user.subscribe(user =>{
    //   this.isLoggedIn = !!user;
    // })
  }

 
  

 
}