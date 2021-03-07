import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ZoomDirective } from './zoom.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective
  ],
  imports: [
    BrowserModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
