import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from './Servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isUserLogged: boolean = false;

	constructor(private _auth : ServiceAuth, private _router : Router) {}

	ngOnInit(): void {
		this.isLogged();

	}

	isLogged(){
		this._auth.getInfoUsuarioLoggeado().subscribe(res =>{
			if (res) {
				this.isUserLogged = true;
				console.log('IsUserLogged: ', this.isUserLogged);
			}else{ 
				this.isUserLogged = false;
			}
		});
	}

	logOut(){
		console.log('LOG OUT')
		this._auth.logOut().then(x => {
			this.isLogged();
			console.log('LOG OUT REALIZADO')
		})
	}
}
