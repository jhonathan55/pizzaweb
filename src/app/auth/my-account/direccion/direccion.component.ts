import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { filter, tap } from 'rxjs/operators';
import { DireccionI } from '../../interfaces/direcciones.interface';
import { regionesI, comunasI } from '../../interfaces/regiones.interface';
import { userI } from '../../interfaces/userI.interface';
import { AdrressesService } from '../../services/adrresses.service';
import { AuthService } from '../../services/auth.service';
import { RegionesService } from '../../services/regiones.service';


@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
  providers: [RegionesService]
})
export class DireccionComponent implements OnInit {

  adrresses$ = this.adrressesSvc.adrresses;



  public user$: Observable<any> = this.authSvc.afAuth.user;
  public selectDireecion: DireccionI = { calle:"",comuna:"",dpto:"",id: "",num:0, region: "",userId:"" };
  public direcciones: DireccionI[] | undefined;
 

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(

    private router: Router,
    private adrressesSvc: AdrressesService,
    private authSvc: AuthService,

  ) {

    //pasa el usuario auth al form
    this.user$.subscribe(user => {
      this.getUser(user)
    });
    
   
  }

  ngOnInit(): void {

  }
  onGoToEdit() {

  }
  onGoToDelete() {

  }

  onAddNewAdrres() {


  }
  //metodo que recibe el cambio de evento en el select d regiones y busca por regionID
  getUser(user: userI): void {
    const uid = user.uid;
    console.log(uid);
  
    console.log("Addrress",this.direcciones)
 
  }
 




}
