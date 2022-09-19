import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './Vistas/home/home.component';
import { LoginComponent } from './Vistas/login/login.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';
import { SigninComponent } from './Vistas/signin/signin.component';

const routes: Routes = [
	{
		path: 'juegos',
		loadChildren: () => import('../app/Vistas/juegos/juegos.module').then(x => x.JuegosModule)
	},
	{path: 'quien-soy', component: QuienSoyComponent},
	{path: 'login', component: LoginComponent},
	{path: 'signin', component: SigninComponent},
	{path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
