import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent implements OnInit, AfterViewInit {

	sequence:number[] = [];
	playedSequence:number[] = [];
	sequenceIndex:number = 0;
	score:number = 0;

	@ViewChild('Button1') Button1: ElementRef<HTMLElement> = {} as ElementRef;
	@ViewChild('Button2') Button2: ElementRef<HTMLElement> = {} as ElementRef;
	@ViewChild('Button3') Button3: ElementRef<HTMLElement> = {} as ElementRef;
	@ViewChild('Button4') Button4: ElementRef<HTMLElement> = {} as ElementRef;

	isCpuTurn:boolean = true;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(){
	}

	addToSequence(){
		let newNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		this.sequence.push(newNumber);
	}

	playButton(idButton:number, delay:number):Promise<void>{

		this.playButtonSound(idButton);
		switch (idButton) {
			case 1:
				this.Button1.nativeElement.classList.add('b1-shadow-inset-center');


				setTimeout(() => {
					this.Button1.nativeElement.classList.remove('b1-shadow-inset-center');
					return new Promise<void>((resolve, reject) => { })
				}, 200);
				break;

			case 2:
				this.Button2.nativeElement.classList.add('b2-shadow-inset-center');

				setTimeout(() => {
					this.Button2.nativeElement.classList.remove('b2-shadow-inset-center');
					return new Promise<void>((resolve, reject) => { })
				}, 200);
				break;

			case 3:
				this.Button3.nativeElement.classList.add('b3-shadow-inset-center');

				setTimeout(() => {
					this.Button3.nativeElement.classList.remove('b3-shadow-inset-center');
					return new Promise<void>((resolve, reject) => { })
				}, 200);
				break;

			case 4:
				this.Button4.nativeElement.classList.add('b4-shadow-inset-center');

				setTimeout(() => {
					this.Button4.nativeElement.classList.remove('b4-shadow-inset-center');
					return new Promise<void>((resolve, reject) => { })
				}, 200);
				break;
		}
		return new Promise<void>((resolve, reject) => { })
	}

	playSequence(){
		let delay = 400;
		this.sequence.forEach( x => {
			setTimeout(async () => {
				await this.playButton(x, delay);
			}, delay);
			delay += 500
		});
	}

	onStart(){
		this.sequence = [];
		this.cpuTurn();
	}

	humanTurn(){
		this.sequenceIndex = 0;
		this.isCpuTurn = false;
		
		this.setHoverBehaviour(true);
	}

	cpuTurn(){
		this.isCpuTurn = true;

		this.setHoverBehaviour(false);

		this.addToSequence();
		this.playSequence();
		this.humanTurn();
	}

	setHoverBehaviour(turn:boolean){
		if (turn = true) {
			this.Button1.nativeElement.classList.add('btn-activated');
			this.Button2.nativeElement.classList.add('btn-activated');
			this.Button3.nativeElement.classList.add('btn-activated');
			this.Button4.nativeElement.classList.add('btn-activated');
		} else {
			this.Button1.nativeElement.classList.remove('btn-activated');
			this.Button2.nativeElement.classList.remove('btn-activated');
			this.Button3.nativeElement.classList.remove('btn-activated');
			this.Button4.nativeElement.classList.remove('btn-activated');
		}
	}

	onButtonPressed(idButton:number){
		
		if (this.sequence[this.sequenceIndex] != idButton) {
			this.onFail();
		}else {
			this.playButtonSound(idButton);
			
			if (this.sequenceIndex == this.sequence.length - 1) {
				this.cpuTurn();
				this.score++;
			}else {
				this.sequenceIndex++;
			}
		}
	}

	onFail(){
		this.sequence = [];
		this.score = 0;
		this.isCpuTurn = true;

		let audio = new Audio();
		audio.src = '../../../assets/wrong-buzzer_dudoo.mp3';
		audio.load();
		audio.volume = 0.05;
		audio.play();
	}

	playButtonSound(idButton:number){
		let audio = new Audio();
		switch (idButton) {
			case 1:
				audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
				audio.load();
				audio.play();

				break;

			case 2:
				audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
				audio.load();
				audio.play();

				break;

			case 3:
				audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
				audio.load();
				audio.play();

				break;

			case 4:

				audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
				audio.load();
				audio.play();

				break;
		}
	}
}
