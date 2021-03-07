import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoodGuysComponent } from './good-guys.component';
import { BadguysComponent } from './badguys.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodGuysComponent,
    BadguysComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
