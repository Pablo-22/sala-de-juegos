import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/Componentes/modal/modal.component';
import { ServiceAuth } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	emailInputStr: string = '';
	passwordInputStr: string = '';
	isUserLogged: boolean = false;

	constructor(private _auth : ServiceAuth, private _router : Router, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.isLogged();
		console.log(this.isUserLogged);
	}

	isLogged(){
		this._auth.getInfoUsuarioLoggeado().subscribe(res =>{
			if (res) {
				this.isUserLogged = true;
			}
		});
	}

	onSignIn() {
		this._auth.registro(this.emailInputStr, this.passwordInputStr).then(res=>{
			if(res){
				this._router.navigate(['']);
				this.isLogged();
			}else {
				this.dialog.open(ModalComponent, {
					data: {
					  title: 'Error',
					  body: 'No se ha podido registrar correctamente. Es posible que ya exista una cuenta con este correo.',
					  buttonText: 'Aceptar'
					},
				});
			}
		});
	}
}
