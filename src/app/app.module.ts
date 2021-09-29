import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaModule } from './components/alta/alta.module';
import { LoginModule } from './components/login/login.module';
import { ContactoModule } from './components/contacto/contacto.module';
import { NoticiaModule } from './components/noticia/noticia.module';
import { NoticiasModule } from './components/noticias/noticias.module';
import { SubscripcionModule } from './components/subscripcion/subscripcion.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AltaModule,
    LoginModule,
    ContactoModule,
    NoticiaModule,
    NoticiasModule,
    SubscripcionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
