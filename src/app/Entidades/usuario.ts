import { arrayRemove } from "firebase/firestore";
import { Log } from "./log";

export class User {
	id:string = '';
	email:string;
	password:string;
	userLogs:Log[];



	mostrar() {
		console.log(this);
	}

	constructor(){
		this.email = '';
		this.password = '';
		this.userLogs = [];
	}
}
