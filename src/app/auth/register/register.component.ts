import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //crea metodo registerFrom que recibe dos parametros
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  constructor() { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log('Form=>',this.registerForm.value);
  }

}
