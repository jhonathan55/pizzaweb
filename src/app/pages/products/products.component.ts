import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$=this.productsSvc.products;

  constructor(
    private productsSvc: ProductsService,
    private shoppingSvc:ShoppingCartService
    ) { 

  }

  ngOnInit(): void {
  }
 addToCart(product:Product):void{
   this.shoppingSvc.updateCart(product);
 }
}
