import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { DetailsComponent } from './details/details.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from'@angular/material/select';


import { ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent,
    
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
  
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,   
    MatOptionModule,
    ReactiveFormsModule,


    NgxPayPalModule,
    NgxSpinnerModule
  ]
})
export class CheckoutModule { }
