import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaComponent } from './alta.component';


const routes: Routes = [
  {path : '', component: AltaComponent},
  {path : 'alta/:id', component: AltaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaRoutingModule { }
