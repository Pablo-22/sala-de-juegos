import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/Servicios/dogs.service';

@Component({
	selector: 'app-preguntados',
	templateUrl: './preguntados.component.html',
	styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

	gameQuestion:any;
	showCorrectAnswer:boolean = false;
	score:number = 0;

	constructor(private _dogs:DogsService) {
		this._dogs.getDogBreedsPlainList()
		this.newQuestion();
	}

	ngOnInit(): void {

	}

	newQuestion(){
		this._dogs.fetchRandomImg().subscribe(result => {
			let imgUrl = result.message;
			let dogBreed = imgUrl.split('/')[4]

			let options = this._dogs.getQuestionOptions(dogBreed, 3);
			console.log(options);
			this._dogs.shuffleArray(options);

			this.gameQuestion = { image: imgUrl, breed: dogBreed, options: options }
		})
	}

	formatBreed(breed:string){
		let newBreed = '';
		let splittedBreed = breed.split('-');
		splittedBreed.forEach(x => {
			newBreed += this.capitalizeFirstLetter(x) + ' '
		})

		newBreed.trimEnd();
		return newBreed;
	}

	capitalizeFirstLetter(str:string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	evaluateAnswer(answer:string){
		if (answer == this.gameQuestion.breed) {
			return true
		}
		return false
	}

	showCorrect(){
		this.showCorrectAnswer = true;
		setTimeout(() => {
			this.showCorrectAnswer = false;
			this.newQuestion();
		}, 2000);
	}

	onAnswer(answer:string){
		if (!this.showCorrectAnswer) {
			if (this.evaluateAnswer(answer)) {
				this.score++;
			}
			this.showCorrect();
		}
	}

	getClass(answer:string){
		if (this.showCorrectAnswer) {
			if (this.evaluateAnswer(answer)) {
				return 'correct';
			} else {
				return 'incorrect';
			}
		}
		return '';
	}
}
