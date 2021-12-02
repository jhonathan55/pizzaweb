import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';

//componentes hijos
import { DireccionComponent } from './direccion/direccion.component';
import { FormComponent } from './direccion/form/form.component';
//impota modulos a from group y lo agregamos a los import

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyAccountComponent,
    DireccionComponent,
    FormComponent,
    
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class MyAccountModule { }
