import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlterUserService {

  apiURL = '/v1/user';

  constructor(private http: HttpClient) { }

  alterPassword(user, newpass) {
    const headers = {
      Authorization: 'bearer ' + localStorage.getItem('token')
    };

    const params = {
      newpass: newpass
    };

    return this.http.put('/histrans' + this.apiURL, user, {headers, params});
  }
}
