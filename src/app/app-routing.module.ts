import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
 
  //rutas creadas automaticamente por el modelo de rutas Ng g m nameForder -m=app --route nameForder 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'pizzas', loadChildren: () => import('./auth/pizzas/pizzas.module').then(m => m.PizzasModule) },
  
 
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  
 
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  
 
  { path: 'preguntas', loadChildren: () => import('./auth/preguntas/preguntas.module').then(m => m.PreguntasModule) },
  
 
  { path: 'somos', loadChildren: () => import('./auth/somos/somos.module').then(m => m.SomosModule) },
  //cuando no existe ninguna redirección te dirige a home sirve para apuntar a home desde el principio NOTA:siempre va al final
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
