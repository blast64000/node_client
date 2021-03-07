 import { Injectable, OnInit } from '@angular/core';
 import { HttpClient  } from '@angular/common/http';
 import { Observable } from 'rxjs';
 
 export class RatedItem {
   id: number;
   url: string;
   title: string;
   rating: number;
 }
 
 @Injectable()
 export class RatingsService {
   url = 'api/items';
   items: any;
   public itemObservable: Observable<any>;
   observer;
   constructor(private http: HttpClient) {
     this.itemObservable = new Observable(observer => {
       this.observer = observer;
       this.getItems();
     })
   }
   ngOnInit() {
   }
   getObservable() {
     return this.itemObservable;
   }
   getItems() {
     this.http.get(this.url)
       .toPromise()
       .then( response => {
         this.items = response;
         this.observer.next(this.items);
       })
       .catch(this.handleError);
   }
   updateRating(item, newRating) {
     item.rating = newRating;
     const url = `${this.url}/${item.id}`;
     this.http
       .put(url, item)
       .toPromise()
       .then(() => this.getItems())
     .catch(this.handleError);
   }
   private handleError(error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
   }
 }
