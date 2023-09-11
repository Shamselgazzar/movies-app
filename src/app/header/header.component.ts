import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

import {  ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor( private authService: AuthService, private router: Router, private location: Location, private movieService: TmdbService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.categoryFilter = this.movieService.filter.subscribe();

    console.log(this.location.path());

    this.authService.isAuthenticatedCheck().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  

  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
 
  category(action:string){
    // this.categoryFilter.next(action);
    // this.router.navigate([this.location.path]);
    // this.categoryFilter.next(action);

    this.router.navigate(['/home'], {
      relativeTo: this.route,
      queryParams: { category : action }
    });
    
  }
    
 
}