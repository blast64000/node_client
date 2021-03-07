import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <input bindon-ngModel="text"><br>

    <input [value]="text" (input)="text=$event.target.value"><br> 

    <input type="text" [(ngModel)]="text" ><br>
    <h1>{{text}}</h1>
  `
})
export class AppComponent {
    text: string = "some text here";
}