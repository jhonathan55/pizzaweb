import { Component, OnInit } from '@angular/core';
//importa componetes para manejo de formularios y validaciones
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//imp desde AuthService
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {

  //creamos variables para validar form
  private isValidEmail = /\S+@\S+\.\S+/;
  private lengthPassword = 6;
  //crea metodo registerFrom que recibe dos parametros
  loginForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder que valida con una expresion regular previamente creado
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(this.lengthPassword)]]
  });
  /*
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  */
  //inyectamos AuthService para utilizar los metodos creados en el servicio y Router para navegar en las distintas pag, fb FormBuelder para validar los campos
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }
  //metodo de logeo y redirección a la home pag
  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        //redirec to home pag cuando el user to loged
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  //metodo de mensaje de error valida campos vacios
  getErrorMessage(field: string) :string {
    let message="";
    if (this.loginForm.get(field)?.errors) {
      message = 'debes ingresar un email';
    }else if(this.loginForm.get(field)?.hasError('pattern')){
      message = 'email invalido';
    }else if (this.loginForm.get(field)?.hasError('minLength')){
      const minLength =this.loginForm.get(field)?.errors;
      message=`El minimo de caracteres es ${minLength}`
    }
    return message;

  }

/*
  ifValidField(field: string): boolean {
   return 
  }
*/
}
