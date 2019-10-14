import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = '/v1/user/login';

  constructor(private http: HttpClient) { }

  userInfo() {
    const headers = {
      Authorization: 'bearer ' + localStorage.getItem('token')
    };

    return this.http.get('/histrans' + this.apiURL, {headers});
  }
}
