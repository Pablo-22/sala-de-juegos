import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/Componentes/modal/modal.component';
import { ServiceAuth } from 'src/app/Servicios/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	isUserLogged: boolean = false;

  	constructor(private _auth : ServiceAuth, private _router : Router, public dialog: MatDialog) { }

	ngOnInit(): void {
		this.isLogged();
	}

  	isLogged(){
		this._auth.getInfoUsuarioLoggeado().subscribe(res =>{
			if (res) {
				this.isUserLogged = true;
			}else{ 
				this.isUserLogged = false;
			}
		});
	}

	onStart() {
		if (this.isUserLogged) {
			this.dialog.open(ModalComponent, {
				data: {
				  title: 'Empezar',
				  body: 'Para empezar seleccione un juego de los de la lista.',
				  buttonText: 'Aceptar'
				},
			});
		} else {
			this._router.navigate(['login']);
		}
	}
}
