import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './noticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NoticiaComponent],
  imports: [
    CommonModule,
    NoticiaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NoticiaModule { }
