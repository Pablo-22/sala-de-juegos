import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from 'src/app/Servicios/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	isUserLogged: boolean = false;

  	constructor(private _auth : ServiceAuth, private _router : Router) { }

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

		} else {
			this._router.navigate(['login']);
		}
	}
}
