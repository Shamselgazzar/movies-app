import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, IsActiveMatchOptions, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn !: boolean;
  isNewUser  = true;
  currentRoutePath = 'empty url';
  categoryFilter!: 'string';

  constructor( private authService: AuthService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {

    console.log(this.location.path());

    this.checkLoginStatus();
  
  }

  checkLoginStatus(){
    this.authService.isAuthenticatedCheck().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
 
  category(action:string){
    this.router.navigate(['/home'], {
      relativeTo: this.route,
      queryParams: { category : action }
    });
  }
    
  // to apply active to the home route even if any query params is added
  // but not if extra path segments added
  routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored',
    paths: 'exact'
    };
}

