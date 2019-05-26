import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DonorsCardComponent } from '../../components/donors-card/donors-card.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    DonorsCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    DirectivesModule,
  ],
  exports: [
    DonorsCardComponent,
  ]
})

export class DonorsModule { }
