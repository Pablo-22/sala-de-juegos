import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "@firebase/app-compat";
import { UsersService } from "./users.service";
import { User } from "../Entidades/usuario";
import { Log } from "../Entidades/log";

@Injectable()
export class ServiceAuth {
    
    constructor(private _auth : AngularFireAuth, private _usersService:UsersService){}

    async login(email: string, password: string){
        try{
            let result:any = await this._auth.signInWithEmailAndPassword(email, password);
			
			let user:User = new User();
			user.email = email;

			this._usersService.pushLoginLog(user);
			
			return result;
        }
        catch(error) {
            alert("No se ha podido hacer el log-in correctamente. Error: " + error)
            //console.log("No se ha podido hacer el log-in correctamente. Error: " + error);
            return null;
        }
      }
   
	async loginGoogle(email: string, password: string){
		try{
			return await this._auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
		}
		catch(error) {
			//alert("No se ha podido hacer el log-in correctamente. Error: " + error)
			//console.log("No se ha podido hacer el log-in correctamente. Error: " + error);
			return null;
		}
	}

	async registro(email: string, password: string){
        try{
            let result:any = await this._auth.createUserWithEmailAndPassword(email, password);
			
			let user:User = new User();
			user.email = email;

			this._usersService.create(user);

			return result;
        }
        catch(error) {
            alert("No se ha podido hacer el registro correctamente. Error: " + error)
            //console.log("No se ha podido hacer el registro correctamente. Error: " + error);
            return null;
        }
	}
   
	async logOut(){
		this._auth.signOut();
	}

    getInfoUsuarioLoggeado(){
        return this._auth.authState;
    }

    async updateUsuario(nombre: string, foto : string){
        var user = firebase.auth().onAuthStateChanged(function(user){
            if (user) {
              console.log(user);
            user.updateProfile( {
                displayName: nombre ,
                photoURL :foto,
              })
            } else {
              console.log('No hay usuario logueado');
            }
          })
    };

	saveLoginData(){

	}
}