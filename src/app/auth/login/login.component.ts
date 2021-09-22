import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormControl, FormGroup } from '@angular/forms';
//imp desde AuthService
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  //crea metodo registerFrom que recibe dos parametros
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }
  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password); 
  } 

}
