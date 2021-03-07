import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  today: Date;
  constructor() {
    this.today = new Date();
  }
}

import {Component} from '@angular/core';
@Component({
selector: 'simple-constructor', template: `
<p>Hello today is {{today}}!</p> `,
})
export class UsingAConstructor {
today: Date; constructor() {
this.today = new Date(); }
}
 