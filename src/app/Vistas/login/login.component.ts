import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from 'src/app/Servicios/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/Componentes/modal/modal.component';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	emailInputStr: string = '';
	passwordInputStr: string = '';
	isUserLogged: boolean = false;

	constructor(private _auth : ServiceAuth, private _router : Router, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.isLogged();
	}

	isLogged(){
		this._auth.getInfoUsuarioLoggeado().subscribe(res =>{
			if (res) {
				this.isUserLogged = true;
			}
		});
	}

	onLogin() {
		this._auth.login(this.emailInputStr, this.passwordInputStr).then(res=>{
			if (res) {
				this.isLogged();
				this._router.navigate(['/']);
			}else {
				this.dialog.open(ModalComponent, {
					data: {
					  title: 'Error',
					  body: 'No se ha podido loguear correctamente. Por favor revise los datos ingresados e intente nuevamente.',
					  buttonText: 'Aceptar'
					},
				});
			}
		});
	}

	onAutocomplete() {
		this.emailInputStr = 'test@gmail.com';
		this.passwordInputStr = 'test12345';
	}
}
