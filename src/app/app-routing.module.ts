import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
 
  //rutas creadas automaticamente por el modelo de rutas Ng g m nameForder -m=app --route nameForder 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'pizzas', loadChildren: () => import('./auth/pizzas/pizzas.module').then(m => m.PizzasModule) },
  //cuando no existe ninguna redirección te dirige a home sirve para apuntar a home desde el principio NOTA:siempre va al final
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
