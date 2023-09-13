import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule {}