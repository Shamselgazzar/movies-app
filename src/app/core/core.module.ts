import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponent } from './about/about.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    CatalogueComponent,
    MovieDetailsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    TranslateModule
  ],
  exports: [
    
  ]
})
export class CoreModule { }
