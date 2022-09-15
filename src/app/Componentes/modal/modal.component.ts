import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Entidades/dialog-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
	modalData:DialogData = new DialogData;
	
	constructor(@Inject(MAT_DIALOG_DATA) data:DialogData) {
		this.modalData.body = data.body;
		this.modalData.title = data.title;
		this.modalData.buttonText = data.buttonText;
	}
	
  }
