 import { Component, Output, Input, EventEmitter } from '@angular/core';
 
 @Component({
   selector: 'app-character',
   templateUrl: './details.component.html',
   styleUrls: ['./details.component.css']
 })
 export class DetailsComponent {
 
   @Input('character') character: any;
   @Output() CharacterDeleted  = new EventEmitter<any>();
 
   deleteChar(){
     this.CharacterDeleted.emit(this.character);
   }
 
 }
