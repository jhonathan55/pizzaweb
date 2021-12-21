import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { DetailsComponent } from './details/details.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';

import { MatSelectModule } from'@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,   
    MatOptionModule,
    MatIconModule,
    MatListModule,
    NgxPayPalModule,
    NgxSpinnerModule
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule { }
