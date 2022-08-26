import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public nombre:string;

  constructor() { 
    this.nombre = '';
  }

  ngOnInit(): void {
      this.nombre = "Ezequiel";
      console.log(this.nombre);
  }

}
