import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DataScrollDirective } from '../../directives/data-scroll/data-scroll.directive';

@NgModule({
  declarations: [
    DataScrollDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    DataScrollDirective,
  ]
})

export class DirectivesModule { }
