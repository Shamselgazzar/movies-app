import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';

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
