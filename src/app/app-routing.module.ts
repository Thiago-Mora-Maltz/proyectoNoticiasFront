import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'noticias', loadChildren: () => import('./components/noticias/noticias.module').then(m => m.NoticiasModule),data: {mostrarNavBar: true}},
  {path: 'alta', canActivate:[AuthGuard], loadChildren: () => import('./components/alta/alta.module').then(m => m.AltaModule),data: {mostrarNavBar: true}},
  {path: 'noticia/:id', loadChildren: () => import('./components/noticia/noticia.module').then(m=> m.NoticiaModule),data: {mostrarNavBar: true}},
  {path: 'subscripcion', loadChildren: () => import('./components/subscripcion/subscripcion.module').then(m=> m.SubscripcionModule),data: {mostrarNavBar: true}},
  {path: 'contacto', loadChildren: () => import('./components/contacto/contacto.module').then(m=> m.ContactoModule),data: {mostrarNavBar: true}},
  {path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m=> m.ProfileModule),data: {mostrarNavBar: true}},
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m=> m.LoginModule), data: {mostrarNavBar: false}},

  {path: '**', redirectTo: 'noticias'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
