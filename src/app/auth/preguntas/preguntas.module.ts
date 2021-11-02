import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntasRoutingModule } from './preguntas-routing.module';
import { PreguntasComponent } from './preguntas.component';


@NgModule({
  declarations: [
    PreguntasComponent
  ],
  imports: [
    CommonModule,
    PreguntasRoutingModule
  ]
})
export class PreguntasModule { }
