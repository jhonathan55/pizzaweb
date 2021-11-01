import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  //decorador que nos permite interactuar con el component padre, este decorador debe estar instanciado en el app-products para obtener la data desde el padre al hijo
  @Input() item!: Product;
  //decorador ouput nos permite comunicarnos con el padre
  @Output() addToCartClick = new EventEmitter<Product>();
 
  constructor() { }

  ngOnInit(): void {
  }

  comprar(): void {
    
    this.addToCartClick.emit(this.item);
  }
}
