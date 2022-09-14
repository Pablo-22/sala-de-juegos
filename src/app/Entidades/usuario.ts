export class Usuario {
	email:string|undefined;
	password:string|undefined;



	mostrar() {
		console.log(this);
	}

	constructor(){
		this.email = '';
		this.password = '';
	}
}
