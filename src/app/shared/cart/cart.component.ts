import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
    //obtengo la info desde los observables
    quantity$=this.shopinCartgSvc.quantityActions$;
    total$=this.shopinCartgSvc.totalActions$;
    cart$=this.shopinCartgSvc.cartActions$;
  constructor(  private shopinCartgSvc: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
