import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //cuando no existe ninguna redirección te dirige a home sirve para apuntar a home desde el principio
 {path:'',redirectTo:'/home', pathMatch: 'full'},
  //rutas creadas automaticamente por el modelo de rutas Ng g m nameForder -m=app --route nameForder 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
