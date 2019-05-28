import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemoveIonIconSvgStrokeDirective } from '../../directives/icon-stroke-remove/icon-stroke-remove.directive';
import { BecomeDonorPage } from './become-donor.page';

const routes: Routes = [
  {
    path: '',
    component: BecomeDonorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BecomeDonorPage,
    RemoveIonIconSvgStrokeDirective,
  ]
})
export class BecomeDonorPageModule {}
