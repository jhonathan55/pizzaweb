import { Injectable } from '@angular/core';
/*
import firebase y autentificación
*/
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators';
import { GoogleAuthProvider, updateProfile, getAuth, updateCurrentUser, updatePhoneNumber } from "firebase/auth";
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { userI } from '../interfaces/userI.interface';


@Injectable()

export class AuthService {

  user$: Observable<userI[]> | undefined;
  users$: Observable<userI[]> | undefined;
  private usersCollection: AngularFirestoreCollection<userI>;

  /*Inyectamos en el contructor la propiedad AngularFireAuth
   */
  constructor(
    public afAuth: AngularFireAuth,
    private readonly afs: AngularFirestore,

  ) {
    this.usersCollection = afs.collection<userI>('users');
    this.getUser();

  }

  /* Crear metodos a utilizar difiniendo sus variables y tributos
      NOta: las variables se definen con sus atributos en minuscula
      cada vez que utilizamos async debemos hacer un try catch */
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result
    }
    catch (error) {
      return console.log(error);
    }
  }

  //metodo resgister google
  async loginGoogle(): Promise<any> {
    try {
      const result = await this.afAuth.signInWithPopup(
        new GoogleAuthProvider()
      )
      return result
    } catch (error) {
      return console.log(error);
    }
  }

  //metodo register email y pass
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      )

      return result;
    } catch (error) {
      return console.log(error);
    }
  }

  //metodo logout
  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error)
    }
  }
  getCorrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  private getUser(): void {
    this.users$ = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as userI))
    );
  }

  //metodo crea una coleccion en firestorDatabase con el mismo id de usuario autentificado
  async saveUserProfile(user: userI) {
    try {
      const userRef: AngularFirestoreDocument<userI> = this.afs.doc(
        `users/${user.uid}`
      );
      return userRef.set(user, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }

  async UpdateProfile(name: string) {
    try {
      const num = '+56912345678'.toString()
      const profile = {
        displayName: name,
        phoneNumber: num
      }
      console.log(name);

      return (await this.afAuth.currentUser)?.updateProfile(profile);

    } catch (error) {
      console.log(error);

    }


  }

 


}