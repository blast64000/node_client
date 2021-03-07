import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Hello today is {{today}}!</p>
  `
})
export class AppComponent {
  today: Date;
  constructor() {
    this.today = new Date();
  }
}