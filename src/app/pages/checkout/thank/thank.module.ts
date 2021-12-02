import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankRoutingModule } from './thank-routing.module';
import { ThankComponent } from './thank.component';


@NgModule({
  declarations: [
    ThankComponent
  ],
  imports: [
    CommonModule,
    ThankRoutingModule
  ]
})
export class ThankModule { }
