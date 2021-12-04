import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomosRoutingModule } from './somos-routing.module';
import { SomosComponent } from './somos.component';


@NgModule({
  declarations: [
    SomosComponent
  ],
  imports: [
    CommonModule,
    SomosRoutingModule
  ]
})
export class SomosModule { }
