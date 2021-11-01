import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$=this.productsSvc.products;
  constructor(private productsSvc: ProductsService) { 

  }

  ngOnInit(): void {
  }
 addToCart(product:Product):void{
    console.log("add to cart ", product);
 }
}
