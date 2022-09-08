import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Vistas/home/home.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { LoginComponent } from './Vistas/login/login.component';
import { MenuComponent } from './Vistas/menu/menu.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'juego', component: JuegoComponent},
	{path: 'quien-soy', component: QuienSoyComponent},
	{path: 'login', component: LoginComponent},
	{path: 'menu', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
