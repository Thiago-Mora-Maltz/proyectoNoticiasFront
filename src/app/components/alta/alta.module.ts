import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRoutingModule } from './alta-routing.module';
import { AltaComponent } from './alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AltaComponent],
  imports: [
    CommonModule,
    AltaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AltaModule { }
