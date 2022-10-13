import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  	providedIn: 'root'
})
export class DogsService {
	
	breedsList:string[] = []
	question:any;

  	constructor(private _http:HttpClient) {
		this.getDogBreedsPlainList();
	}

	fetchDogBreeds(){
		return this._http.get<any>('https://dog.ceo/api/breeds/list/all');
	}

	fetchRandomImg(){
		return this._http.get<any>('https://dog.ceo/api/breeds/image/random');
	}

	getDogBreedsPlainList(){
		return this.fetchDogBreeds().subscribe(result => {
			Object.entries(result['message']).forEach( ([key, value]) => {
				let listItem:string = String(value);
				if (listItem) {
					let subElements = listItem.split(',');
					subElements.forEach((x: any) => {
						let newItem = key + '-' + x;
						this.breedsList.push(newItem);
					});
				} else {
					this.breedsList.push(key);
				}
			});
			console.log('resultado', result);
		});
	}

	getQuestionOptions(correctAnswer:string, optionsNumber:number){
		console.log('razas', this.breedsList)
		this.shuffleArray(this.breedsList);
		let filteredArray = this.breedsList.filter(x => { return x !== correctAnswer })
		let optionsArray = filteredArray.slice(0, optionsNumber)
		optionsArray.push(correctAnswer);
		return optionsArray;
	}

	shuffleArray(array:any) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
}
