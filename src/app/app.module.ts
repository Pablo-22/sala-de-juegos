import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { LoginComponent } from './Vistas/login/login.component';
import { HomeComponent } from './Vistas/home/home.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';
import { ServiceAuth } from './Servicios/auth.service';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './Vistas/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule
  ],
  providers: [ServiceAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
