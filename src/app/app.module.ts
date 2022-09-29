import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Vistas/login/login.component';
import { HomeComponent } from './Vistas/home/home.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';
import { ServiceAuth } from './Servicios/auth.service';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './Vistas/signin/signin.component';
import { ModalComponent } from './Componentes/modal/modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { MayorMenorComponent } from './Vistas/juegos/mayor-menor/mayor-menor.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    SigninComponent,
    ModalComponent,
    MayorMenorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    NoopAnimationsModule,
	MatDialogModule ,
	HttpClientModule, 
	
	AngularFirestoreModule,
	provideFirebaseApp(() => initializeApp(environment)),
   	provideAuth(() => getAuth()),
   	provideDatabase(() => getDatabase()),
   	provideFirestore(() => getFirestore()),
],
  entryComponents: [
    ModalComponent
  ],
  providers: [ServiceAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
