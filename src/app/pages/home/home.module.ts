import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DirectivesModule } from '../../shared/directives/directives.module';

import { ElementsModule } from '../../shared/elements/elements.module';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', component: HomePage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ElementsModule,
    DirectivesModule,
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
