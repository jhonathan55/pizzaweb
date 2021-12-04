import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { StoresI } from 'src/app/auth/interfaces/stores.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoresService {


  stores: Observable<StoresI[]> | undefined;
  private storesCollection: AngularFirestoreCollection<StoresI>;

  constructor(
    private readonly afs: AngularFirestore
  ) { 
    this.storesCollection= afs.collection<StoresI>('stores');
    this.getStores();
  }
  private getStores(): void {
    this.stores= this.storesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as StoresI))
    );
  }
  

}
