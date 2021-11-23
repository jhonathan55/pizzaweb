import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '../products/interfaces/store.interface';
import { DataService } from '../products/services/data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() tienda!: Store;


  model = {
    name: '',
    store:'',
    shippingAddress: '',
    city:''
  }

  isDelivery = false;

  //3:25:00 Cargar Stores de firebase

  stores = [ /*Store[]= []*/ 
    {
      "id":1,
      "name": "Republica 1",
      "address": "Republica 285",
      "city": "Santiago",
      "openingHours": "09:00 - 14:00 y 15:30 - 23:00"
    },
    {
      "id":2,
      "name": "Republica 2",
      "address": "Republica 290",
      "city": "Santiago",
      "openingHours": "09:00 - 14:00 y 15:30 - 23:00"
    },
    {
      "id":3,
      "name": "Edificio I",
      "address": "Grajales 2374",
      "city": "Santiago",
      "openingHours": "09:00 - 14:00 y 15:30 - 23:00"
    },
    {
      "id":4,
      "name": "Edificio E",
      "address": "Avenida España 169",
      "city": "Santiago",
      "openingHours": "09:00 - 14:00 y 15:30 - 23:00"
    },
    {
      "id":5,
      "name": "Edificio E - 2",
      "address": "Avenida España 340",
      "city": "Santiago",
      "openingHours": "09:00 - 14:00 y 15:30 - 23:00"
    },
    {
      "id":6,
      "name": "Toesca",
      "address": "Toesca 2486",
      "city": "Santiago",
      "openingHours": "09:00 - 14:00 y 15:30 - 23:00"
    }
  ]
  

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void 
  {

  }

  onPickupOrDelivery(value:boolean):void
  {
    this.isDelivery = value;

  }

  onSubmit():void
  {
    console.log('Guardar');
  }
  
  /*Revisar traer locales de firebase 3:18:08
  private getStores(): void
  {
    this.dataSvc.getStores()
    
    .pipe(
      tap((stores: Store[])=> this.stores = stores))
    .subscribe()
  }*/
  
  

}
