import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:index', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'details/:word', loadChildren: './details/details.module#DetailsPageModule'},
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'flash/:word', loadChildren: './flash/flash.module#FlashPageModule' },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }