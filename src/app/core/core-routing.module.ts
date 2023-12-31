import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from '../authentication/guards/home.guard';
import { AboutComponent } from './about/about.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    children: [
      { 
        path: '',
        canActivate: [HomeGuard],
        component: CatalogueComponent 
      },
      { 
        path: 'movie-details/:id', 
        canActivate: [HomeGuard], 
        component: MovieDetailsComponent 
      },
      
    ],
  },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
