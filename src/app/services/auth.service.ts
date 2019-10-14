import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = '/token';

  constructor(private router: Router, private http: HttpClient) { }

  doLogin(model: any) {
    const body = {
      grant_type: 'password',
      username: model.username,
      password: model.password
    };

    return this.http.post('/auth' + this.apiURL, qs.stringify(body)).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.access_token);
          localStorage.setItem('refreshToken', user.refresh_token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('info');
    this.router.navigate(['/login']);
  }

  refreshToken() {
    const body = {
      grant_type: 'refresh_token',
      refresh_token: localStorage.getItem('refreshToken')
    };
    return this.http.post('/auth' + this.apiURL, qs.stringify(body)).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.access_token);
          localStorage.setItem('refreshToken', user.refresh_token);
        }
      })
    );
  }
}
