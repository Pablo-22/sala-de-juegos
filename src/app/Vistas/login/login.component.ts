import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from 'src/app/Servicios/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	emailInputStr: string = '';
	passwordInputStr: string = '';
	isUserLogged: boolean = false;

	constructor(private _auth : ServiceAuth, private _router : Router) {}

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

	onLogin() {
		this._auth.login(this.emailInputStr, this.passwordInputStr).then(res=>{
			console.log(res);
			this._router.navigate(['']);
			this.isLogged();
			console.log(this.isUserLogged);
		});
	}
}
