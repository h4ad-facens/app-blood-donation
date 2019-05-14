import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ButtonLeftIconComponent } from '../../components/button-left-icon/button-left-icon.component';
import { CardWithActionComponent } from '../../components/card-with-action/card-with-action.component';
import { DataScrollDirective } from '../../directives/data-scroll/data-scroll.directive';

@NgModule({
  declarations: [
    CardWithActionComponent,
    ButtonLeftIconComponent,
    DataScrollDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CardWithActionComponent,
    ButtonLeftIconComponent,
    DataScrollDirective,
  ]
})

export class ElementsModule { }
