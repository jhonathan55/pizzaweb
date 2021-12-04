
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Observable<Product[]> | undefined;
  
  private productsCollection: AngularFirestoreCollection<Product>;
  
  constructor(
    private readonly afs: AngularFirestore
    
    ) { 

    this.productsCollection = afs.collection<Product>('products');
    this.getProducts();
  }
  
  private getProducts():void{
    this.products= this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as Product))
    );
  }


}
