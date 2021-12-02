import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DireccionI } from 'src/app/auth/interfaces/direcciones.interface';
import { comunasI, regionesI } from 'src/app/auth/interfaces/regiones.interface';
import { userI } from 'src/app/auth/interfaces/userI.interface';
import { AdrressesService } from 'src/app/auth/services/adrresses.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegionesService } from 'src/app/auth/services/regiones.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
 
  public selectRegion: regionesI = { id: 0, name: "" };

  public regiones: regionesI[] | undefined;
  public comunas: comunasI[] | undefined;

  adrresForm = this.fb.group({

    //Validators.pattern metodo de FormBuelder que valida con una expresion regular previamente creado
    region: ['', [Validators.required]],
    comuna: ['', [Validators.required]],
    calle: ['', [Validators.required]],
    num: ['', [Validators.required]],
    dpa: [''],
    uidUser: [{ value: '', isReadonly: true }, [Validators.required]],
  });

  constructor(
    private regionesSvc: RegionesService,
    private router: Router,
    private fb: FormBuilder,
    private authSvc: AuthService,
    private addrresSvc: AdrressesService,
  ) { }

  ngOnInit(): void {
    //obtengo el array de regiones desde el servicio y lo almaceno en la variable regiones
    this.regiones = this.regionesSvc.getRegion();
    //pasa el usuario auth al form
    this.user$.subscribe(user => {
      this.initValueForm(user)
    });

  }

  //metodo recibe los parametros de formAdrres
  saveAdrresForm() {

    if (this.adrresForm.valid) {

      const adrress = this.adrresForm.value;
      const adrId = this.adrresForm.value.id || null;
      this.addrresSvc.onSaveAdrres(adrress, adrId);

    }

  }


  //metodo que recibe el cambio de evento en el select d regiones y busca por regionID
  onSelect(idRegion: number): void {
    console.log(idRegion);

    this.comunas = this.regionesSvc.getComunas().filter(item => item.regionesId == idRegion);
  }
  //validación de form
  isValidField(field: string): string {
    const validatedField = this.adrresForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  //incializamos el form y pasamos los datos del auth user
  initValueForm(user: userI): void {
    this.adrresForm.patchValue({
      uidUser: user.uid
    });
  }

}
