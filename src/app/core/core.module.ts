import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    CatalogueComponent,
    MovieDetailsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  exports: [
    CatalogueComponent,
    MovieDetailsComponent,
    AboutComponent
  ]
})
export class CoreModule { }
