 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';
 import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 
 import { AppComponent } from './app.component';
 import { RatedItemComponent } from './rated-item/rated-item.component';
 import { MockbackendService } from './mockbackend.service';
 
 @NgModule({
   declarations: [
     AppComponent,
     RatedItemComponent
   ],
   imports: [
     BrowserModule,
     HttpClientModule,
     InMemoryWebApiModule.forRoot(MockbackendService)
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }