import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './Vistas/home/home.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { LoginComponent } from './Vistas/login/login.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';
import { SigninComponent } from './Vistas/signin/signin.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'juego', component: JuegoComponent},
	{path: 'quien-soy', component: QuienSoyComponent},
	{path: 'login', component: LoginComponent},
	{path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
