import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormControl, FormGroup } from '@angular/forms';
//importamos el AuthService
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //inyectamos AuthService
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  //crea metodo registerFrom que recibe dos parametros
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  //declaramos una variable desde AuthService
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }
  onRegister(){
    const {email, password}=this.registerForm.value;
    this.authSvc.register(email,password);
  }

}
