import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, IsActiveMatchOptions, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn !: boolean;
  isNewUser  = true;
  currentRoutePath = this.location.path();
  categoryFilter!: string;
  language = 'en';

  constructor( private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location : Location,
    public translate : TranslateService
    ){}
    
  ngOnInit(): void {

    this.checkLocal();
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

  checkLocal(){
    const storedLanguage = localStorage.getItem('language');
    this.language = storedLanguage ? storedLanguage : 'en';
    this.translate.use(this.language);
  }

  toggleLocal(){
    this.language = this.language === 'en'? 'ar': 'en';
    localStorage.setItem('language', this.language );
    this.translate.use(this.language);

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

