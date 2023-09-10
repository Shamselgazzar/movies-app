import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

import {  Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn !: Boolean;
  isNewUser : Boolean = true;
  currentRoutePath: string = 'empty url';

  constructor( private authService: AuthService, private router: Router, private location: Location){}

  ngOnInit(): void {
    
    console.log(this.location.path());

    this.authService.isAuthenticatedCheck().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  

  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
 
  // switchLang(){
  //   this.localSerive.switchLanguage();
  // }

 
}