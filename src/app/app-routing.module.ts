import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'become-donor', loadChildren: './pages/become-donor/become-donor.module#BecomeDonorPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'request-blood', loadChildren: './pages/request-blood/request-blood.module#RequestBloodPageModule' },
  { path: 'all-donors', loadChildren: './pages/all-donors/all-donors.module#AllDonorsPageModule' },
  { path: 'see-requests', loadChildren: './pages/see-requests/see-requests.module#SeeRequestsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
