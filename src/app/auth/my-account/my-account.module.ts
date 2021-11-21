import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
//impota modulos a from group y lo agregamos a los import
import { ReactiveFormsModule } from '@angular/forms';
import { DireccionComponent } from './direccion/direccion.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    DireccionComponent,
    
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class MyAccountModule { }