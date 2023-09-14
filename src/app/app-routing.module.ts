import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () =>
      import('./core/core.module').then(
        (m) => m.CoreModule
      )
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


//lazy loading with preloading commented to be used if needed....
// imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
