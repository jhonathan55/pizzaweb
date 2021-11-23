import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { regionesI,comunasI } from '../../interfaces/regiones.interface';
import { AdrressesService } from '../../services/adrresses.service';
import { RegionesService } from '../../services/regiones.service';


@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
  providers:[RegionesService]
})
export class DireccionComponent implements OnInit {

  adrresses$ = this.adrressesSvc.adrresses;
 
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(
    private regionesSvc:RegionesService, 
    private router: Router,
    private fb: FormBuilder,
    private adrressesSvc: AdrressesService,
   ) { }

  ngOnInit(): void {
   
  }
  onGoToEdit(){

  }
  onGoToDelete(){

  }

  onAddNewAdrres(){
    
  }


}
