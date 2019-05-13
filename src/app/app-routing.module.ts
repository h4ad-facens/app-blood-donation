import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPageModule } from './pages/login/login.module';
import { BecomeDonorPageModule } from './pages/become-donor/become-donor.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => LoginPageModule },
  { path: 'become-donor', loadChildren: () => BecomeDonorPageModule },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'request-blood', loadChildren: './pages/request-blood/request-blood.module#RequestBloodPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
