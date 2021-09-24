import { Component, OnInit } from '@angular/core';
//importa componetes a utilizar
import { FormControl, FormGroup } from '@angular/forms';
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
  //crea metodo registerFrom que recibe dos parametros
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })
  //inyectamos AuthService y Router
  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async onLogin() {
    
    const { email, password } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if(user){
        //redirec to home pag cuando el user to loged
        this.router.navigate(['/home']);
      }
    }catch(error){
      console.log(error)
    }
     
  } 

}
