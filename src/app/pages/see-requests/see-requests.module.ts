import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirectivesModule } from '../../shared/directives/directives.module';
import { DonorsModule } from '../../shared/donors/donors.module';
import { ElementsModule } from '../../shared/elements/elements.module';
import { SeeRequestsPage } from './see-requests.page';

const routes: Routes = [
  { path: '', component: SeeRequestsPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ElementsModule,
    DonorsModule,
    DirectivesModule,
  ],
  declarations: [SeeRequestsPage]
})
export class SeeRequestsPageModule {}
