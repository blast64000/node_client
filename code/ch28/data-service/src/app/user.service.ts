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
      .catch(this.handleError);
  }

  deleteUser(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  createUser(user): Promise<any> {
    return this.http.post(this.url, user)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}