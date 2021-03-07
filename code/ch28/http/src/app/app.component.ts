import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;

  constructor(private http: HttpClient) {
    http.get('../../assets/dummyDB.JSON')
      .toPromise()
      .then((data) => {
        this.users = data;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}