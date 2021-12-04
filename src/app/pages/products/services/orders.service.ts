import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailsOrdersI, DetailsProductI, OrdersI } from 'src/app/auth/interfaces/orders.interfce';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: Observable<OrdersI[]> | undefined;
  private orderCollection: AngularFirestoreCollection<OrdersI>;
  constructor(
    private readonly afs: AngularFirestore
  ) {
    this.orderCollection = afs.collection<OrdersI>('orders');
    this.getOrders();
  }


  //metodo que actualiza y guarda una direccion nueva
  //nota: falta pasar el id en la data data={id,...data}
  onSaveOrder(order: OrdersI, ordId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = ordId || this.afs.createId();
        const data = { id, ...order };
        const result = await this.orderCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }


  private getOrders(): void {
    this.orders = this.orderCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as OrdersI))
    );
  }

}


