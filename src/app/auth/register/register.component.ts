import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormControl, FormGroup } from '@angular/forms';
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
  //crea metodo registerFrom que recibe dos parametros
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  //declaramos una variable desde AuthService
  constructor(private authSvc: AuthService, private router:Router) { }

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

}
