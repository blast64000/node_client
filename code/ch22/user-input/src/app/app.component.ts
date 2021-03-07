import { Component } from '@angular/core';
import { myInput } from './input.component';

@Component({
  selector: 'app-root',
  template: `
    <myInput name="Brendan" occupation="Student/Author"></myInput>
    <myInput name="Brad" occupation="Analyst/Author"></myInput>
    <myInput name="Caleb" occupation="Student/Author"></myInput>
    <myInput></myInput>
  ` })
export class AppComponent {
  title = 'Using Inputs in Angular';
}
