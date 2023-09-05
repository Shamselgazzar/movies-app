import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: CatalogueComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'login', component: LoginComponent }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
