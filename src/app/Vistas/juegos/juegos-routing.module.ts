import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { SimonComponent } from './simon/simon/simon.component';

const routes: Routes = [
	{ path: 'mayor-menor', component: MayorMenorComponent },
	{ path: 'ahorcado', component: AhorcadoComponent },
	{ path: 'simon', component: SimonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
