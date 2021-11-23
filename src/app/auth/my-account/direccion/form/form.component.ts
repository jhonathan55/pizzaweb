import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { comunasI, regionesI } from 'src/app/auth/interfaces/regiones.interface';
import { RegionesService } from 'src/app/auth/services/regiones.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public selectRegion: regionesI={id:0,name:""};
 
  public regiones: regionesI[] | undefined;
  public comunas: comunasI[] | undefined;

  adrresForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder que valida con una expresion regular previamente creado
    region: ['', [Validators.required]],
    comuna:['',[Validators.required]],
    calle:['',[Validators.required]],
    num:['',[Validators.required]],
    dpa: ['']
  });

  constructor(
    private regionesSvc:RegionesService, 
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
     //obtengo el array de regiones desde el servicio y lo almaceno en la variable regiones
     this.regiones=this.regionesSvc.getRegion();
  }
  
//metodo recibe los parametros de formAdrres
saveAdrresForm() {
    
  const adrres = this.adrresForm.value;
  console.log(adrres);
}
 

//metodo que recibe el cambio de evento en el select d regiones y busca por regionID
onSelect(idRegion: number): void {
 this.comunas=this.regionesSvc.getComunas().filter(item=>item.regionesId==idRegion); 
}
//validación de form
isValidField(field: string): string {
  const validatedField = this.adrresForm.get(field);
  return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
}


}
