import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DetailsOrdersI, DetailsProductI } from 'src/app/auth/interfaces/orders.interfce';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailOrderService {
  detailOrder: Observable<DetailsOrdersI[]> | undefined;
  private detailsOrdersCollection: AngularFirestoreCollection<DetailsOrdersI>;
  constructor(
    private readonly afs: AngularFirestore
  ) {
    this.detailsOrdersCollection=afs.collection('detailsOrders')
    this.getDetailOrder()
   }

  onSaveDetailsOrder(detOrd: DetailsProductI[]): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...detOrd };
        const result = await this.detailsOrdersCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  private getDetailOrder(): void {
    this.detailOrder = this.detailsOrdersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as DetailsOrdersI))
    );
  }

}
