import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticias.component';
import { NoticiaComponent } from '../noticia/noticia.component';


const routes: Routes = [
  {path: '', component: NoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
