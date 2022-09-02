import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { MenuComponent } from './Vistas/menu/menu.component';

const routes: Routes = [
	{path: '', component: MenuComponent},
	{path: 'juego', component: JuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
