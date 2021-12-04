import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';
import { Store } from '../interfaces/store.interface';

@Injectable({
    providedIn: 'root'
  })

  export class DataService 
  {
    stores: Observable<Store[]> | undefined;
    private storesCollection: AngularFirestoreCollection<Store>;

    constructor(private readonly afs: AngularFirestore) 
    {
        this.storesCollection = afs.collection<Store>('stores');
        this.getStores();
    }

    getStores():void
    {
        this.stores= this.storesCollection.snapshotChanges().pipe(
          map(actions => actions.map(a=>a.payload.doc.data() as Store))
        );
      }    
  }