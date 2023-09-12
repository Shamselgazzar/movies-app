import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../login/auth.service';
import { TmdbService } from '../catalogue/tmdb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn !: boolean;
  isNewUser  = true;
  currentRoutePath = 'empty url';
  categoryFilter: any;

  constructor( private authService: AuthService,
    private router: Router,
    private location: Location,
    private movieService: TmdbService,
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

    // planning to use this code later
    // this.categoryFilter.next(action);
    //this.categoryFilter = this.movieService.filter.subscribe(
    // this.router.navigate([this.location.path]););
  }
    
 
}