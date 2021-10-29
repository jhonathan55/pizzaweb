import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//importamos el AuthService
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //inyectamos AuthService
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

    //declaramos variables para validar form
    private isValidEmail = /\S+@\S+\.\S+/;
    private lengthPassword = 6;
    private lengthCell = 9;
    private number= "/^-?[0-9][^\.]*$/"; 

  //crea metodo registerFrom que recibe dos parametros
 

  registerForm = this.fb.group({
    //Validators.pattern metodo de FormBuelder qlue valida con una expresion regular previamente creado
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    cel: ['', [Validators.required, 
      Validators.maxLength(this.lengthCell),
      Validators.minLength(this.lengthCell)
      
    ]
      ],
    //minLength valida la cantidad min de caracteres
    password: ['', [Validators.required, Validators.minLength(this.lengthPassword)]],
    politicas:['',[Validators.requiredTrue]]
  });
 
  //declaramos una variable desde AuthService
  constructor(
    private authSvc: AuthService, 
    private router:Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }
  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if(user){
        Swal.fire('user created successfully');
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error(error);
      
    }
  }
   //metodo valida campos vacios y muestra el error en txtbox con la propiedad de boostrap is-valid
   isValidField(field: string): string {
    const validatedField = this.registerForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

}
