import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, docData, DocumentData, Firestore, setDoc, updateDoc, where, query, getDocs } from '@angular/fire/firestore';
import { User } from '../Entidades/usuario'
import { Observable } from 'rxjs';
import { Log } from '../Entidades/log';

@Injectable({
  	providedIn: 'root'
})
export class UsersService {

	private usersCollection: CollectionReference<DocumentData>;
	private logsCollection: CollectionReference<DocumentData>;

  	constructor(private _firestore: Firestore) {
		this.usersCollection = collection(this._firestore, 'users');
		this.logsCollection = collection(this._firestore, 'logs');
		console.log(this.usersCollection);
	}

	getAll() {
		return collectionData(this.usersCollection, {
		  idField: 'id',
		}) as Observable<User[]>;
	}

	get(id: string) {
		const usersDocumentReference = doc(this.usersCollection, id);
		return docData(usersDocumentReference, { idField: 'id' })  as Observable<User>;
	}

	async getUserByEmail(email: string) {
		const q = query(this.usersCollection, where("email", "==", email));
		const querySnapshot = await getDocs(q);
		let documents:DocumentData[] = [];
		querySnapshot.docs.forEach(doc => {
			let docData = doc.data();
			documents.push(docData);
		})
		return documents;
	}

	create(user: User) {
		// Crea un nuevo documento con los datos del usuario, dentro de la colección 'users'
		let newUserDocRef = doc(this.usersCollection);
		setDoc(newUserDocRef, {
			id: newUserDocRef.id,
			email:user.email,
		})
		
		// Crea una nueva colección dentro del documento del usuario, para añadir los logs
		user.id = newUserDocRef.id;
		this.pushLoginLog(user);
		
		return newUserDocRef;
	}

	createLog(log:Log){
		let newLogDocRef = doc(this.logsCollection);
		setDoc(newLogDocRef, {
			id: newLogDocRef.id,
			userId: log.userId,
			createdDate: log.createdDate,
			value: log.value
		})
	}

	update(user: User) {
		console.log('UPDATE');
		let id:string = user.id;
		const userDocumentReference = doc(this.usersCollection, id);
		updateDoc(userDocumentReference, {
			id: user.id,
			email:user.email,
		} );
	}

	async pushLoginLog(user:User){
		let loginLog = new Log('Login', user.id);
		if (!loginLog.userId) {
			let data = await this.getUserByEmail(user.email);
			loginLog.userId =  data[0]['id'];	
		}
		this.createLog(loginLog);
	}  

	delete(id: string) {
		const userDocumentReference = doc(this._firestore, `user/${id}`);
		return deleteDoc(userDocumentReference);
	}
}
