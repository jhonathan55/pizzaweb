import { Injectable } from '@angular/core';

/*
import firebase y autentificación
*/
import { FirebaseApp } from '@firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { first } from 'rxjs/operators';  
@Injectable()

export class AuthService {

  public user: firebase.User | undefined;




  /*Inyectamos en el contructor la propiedad AngularFireAuth
   */
  constructor(public afAuth: AngularFireAuth) { }
  /* Crear metodos a utilizar difiniendo sus variables y tributos
      NOta: las variables se definen con sus atributos en minuscula
      cada vez que utilizamos async debemos hacer un try catch */
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    catch (error) {
      return console.log(error);

    }

  }
  //metodo register
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

}


