import { Component } from '@angular/core';

@Component({
  selector: 'message',
  template: `
    <h1>Hello World!<h1> `,
  styles:[` h1 {
    font-weight: bold; }
  `]
})
export class Chapter21Component {
  title = 'Chapter 21 Example';
}
