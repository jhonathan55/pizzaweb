import { Component, OnInit } from '@angular/core';
//import desde service auth
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //provires AuthService
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged= false;
  constructor(private authSvc:AuthService) { }


  //metodo obtine el usuario desde firebase getCorrentUser creado en authService
  async ngOnInit() {
   
    const user = await this.authSvc.getCorrentUser();
    if(user){
      this.isLogged=true
      console.log('user=>',user
      );
    }
  }

}
