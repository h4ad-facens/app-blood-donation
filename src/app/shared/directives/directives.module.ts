import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DataScrollDirective } from '../../directives/data-scroll/data-scroll.directive';
import { ShadowStyleDirective } from '../../directives/shadow-style/shadow-style.directive';

@NgModule({
  declarations: [
    DataScrollDirective,
    ShadowStyleDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    DataScrollDirective,
    ShadowStyleDirective,
  ]
})

export class DirectivesModule { }
