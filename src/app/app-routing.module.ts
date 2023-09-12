import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogueComponent } from './core/catalogue/catalogue.component';
import { MovieDetailsComponent } from './core/movie-details/movie-details.component';
import { AboutComponent } from './core/about/about.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: 'home',
   component: CatalogueComponent,
    canActivate: [AuthGuard]
  },
  { path: 'movie-details/:id',
   component: MovieDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutComponent },
  
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
