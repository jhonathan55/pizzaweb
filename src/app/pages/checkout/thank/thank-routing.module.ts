import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankComponent } from './thank.component';

const routes: Routes = [{ path: '', component: ThankComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankRoutingModule { }
