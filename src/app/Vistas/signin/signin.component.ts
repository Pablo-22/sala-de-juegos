import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

	onRegister() {
		
	}

	onSignIn() {
		this._auth.registro(this.emailInputStr, this.passwordInputStr).then(res=>{
			console.log(res);
			this._router.navigate(['']);
			this.isLogged();
			console.log(this.isUserLogged);
		});
	}
}
