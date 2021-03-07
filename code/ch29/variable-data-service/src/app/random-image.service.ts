 import { Injectable, OnInit } from '@angular/core';
 import { Observable } from 'rxjs';
 
 @Injectable()
 export class RandomImageService {
   imageChange: Observable<any>;
   private images = [
     {
       url: '../../assets/images/arch.jpg',
       title: "Delicate Arch"
     },
     {
       url: '../../assets/images/lake.jpg',
       title: "Silver Lake"
     },
     {
       url: '../../assets/images/cliff.jpg',
       title: "Desert Cliff"
     },
     {
       url: '../../assets/images/bison.jpg',
       title: "Bison"
     },
     {
       url: '../../assets/images/flower.jpg',
       title: "Flower"
     },
     {
       url: '../../assets/images/volcano.jpg',
       title: "Volcano"
     },
   ];
   constructor() {
     this.imageChange = new Observable(observer => {
       this.changeLoop(observer);
     });
   }
   changeLoop(observer){
     setTimeout(() => {
       let imgIndex = this.getRandom(0,6);
       let image = this.images[imgIndex];
       observer.next(
         {
           url: image.url,
           title: image.title,
           width: this.getRandom(200,400)
         }
       );
       this.changeLoop(observer);
     }, this.getRandom(100,1000));
   }
   getRandom(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
   }
   getRandomImage(): Observable<any> {
     return this.imageChange;
   }
 }
