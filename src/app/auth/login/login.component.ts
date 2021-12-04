import { Component, OnInit } from '@angular/core';
//importa componetes para manejo de formularios y validaciones
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//imp desde AuthService
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

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

 
  //crea metodo loginForm que recibe dos parametros desde el html
  loginForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder qlue valida con una expresion regular previamente creado
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    //minLength valida la cantidad min de caracteres
    password: ['', [Validators.required, Validators.minLength(this.lengthPassword)]]
  });
 
  //inyectamos AuthService para utilizar los metodos creados en el servicio y Router para navegar en las distintas pag, fb FormBuelder para validar los campos router para navegar entre pag
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
      //si valida si el form es valido
      if (this.loginForm.valid) {
        //declara en la varible user el resultado del metodo login
        const user = await this.authSvc.login(email, password);
        //si existe un usuario activa un swal alert
        if (user) {
          //redirec to home pag cuando el user to loged
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido a la tienda ',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/home']);
          //si no existe user swal alert error
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Ha ocurrido un error en la validación de los datos`,
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  //metodo logeo Google
  async onLoginGoogle(){
    try {
      const user= await this.authSvc.loginGoogle()
      if(user){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido a la tienda ',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/home']);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Ha ocurrido un error en la validación de los datos`,
        })
      }

    } catch (error) {
     
      console.log(error)
    }
  }

  //metodo valida campos vacios y muestra el error en txtbox con la propiedad de boostrap is-valid

  isValidField(field: string): string {
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }
}
