import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn !: Boolean;
  isNewUser : Boolean = true;
  private userSub !: Subscription;

  constructor(private authService: AuthService, private router : Router){}

  ngOnInit(): void {
    this.authService.isAuthenticatedCheck().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
 
  

 
}