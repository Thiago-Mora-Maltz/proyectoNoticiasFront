import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscripcionRoutingModule } from './subscripcion-routing.module';
import { SubscripcionComponent } from './subscripcion.component';


@NgModule({
  declarations: [SubscripcionComponent],
  imports: [
    CommonModule,
    SubscripcionRoutingModule
  ]
})
export class SubscripcionModule { }
