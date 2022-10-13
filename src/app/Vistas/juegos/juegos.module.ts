import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { SimonComponent } from './simon/simon/simon.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AhorcadoComponent,
    SimonComponent,
    PreguntadosComponent,
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,

	MatCardModule,
	MatListModule,
  ]
})
export class JuegosModule { }
