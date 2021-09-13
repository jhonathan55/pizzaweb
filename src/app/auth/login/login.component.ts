import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //crea metodo registerFrom que recibe dos parametros
 loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')

})
  constructor() { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log('Form=>',this.loginForm.value);
  }

}
