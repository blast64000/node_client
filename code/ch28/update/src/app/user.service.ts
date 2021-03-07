import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url = 'api/users'
  constructor(private http: HttpClient) { }

  getUsers(): Promise<any[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  updateUser(user): Promise<void> {
    console.log(user);
    const url = `${this.url}/${user.id}`;
    return this.http
      .put(url, user)
      .toPromise()
      .then(() => user)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}