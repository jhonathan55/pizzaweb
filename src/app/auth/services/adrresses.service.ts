
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { DireccionI } from '../interfaces/direcciones.interface';

@Injectable({
  providedIn: 'root'
})
export class AdrressesService {

  adrresses: Observable<DireccionI[]> | undefined;
  private adrressesCollection: AngularFirestoreCollection<DireccionI>;

  constructor(
    private readonly afs: AngularFirestore
  ) {
    this.adrressesCollection = afs.collection<DireccionI>('direccion');
    this.getAdrresses();
  }
  //metodo que elimina una direccion
  onDeleteAdrresses(adrId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.adrressesCollection.doc(adrId).delete();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  //metodo que actualiza y guarda una direccion nueva

  onSaveAdrres(adrres: DireccionI, adrId?: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = adrId ||this.afs.createId();
        const data = {id, ...adrres };
        const result = await this.adrressesCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }
  //metodo que llama a todas las direcciones
  getAdrresses(): void {
    this.adrresses = this.adrressesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as DireccionI))
    );
  }



  

}
