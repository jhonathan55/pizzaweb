import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import desde service auth
import { AuthService } from 'src/app/auth/services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //provires AuthService
  providers:[AuthService]
})
export class NavbarComponent  {
  //variables para identificar si el usuario esta logeado y para obtener el usuario desde firebase

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(
    private authSvc:AuthService, 
    private router:Router,
    ) { }

  //metodo de cerrar sesión 
  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
      
    }catch(error){
      console.error(error); 
    }
  }

  //metodo 
  goToCheckout():void{
    this.router.navigate(['/checkout']);
  }

}
