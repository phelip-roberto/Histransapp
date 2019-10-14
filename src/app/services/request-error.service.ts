import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestErrorService {

  constructor(private authService: AuthService) { }

  errorHandling(error) {
    if (error.status === 401) {
      this.authService.refreshToken().subscribe(
        () => {
          document.location.reload();
        },
        () => {
          this.authService.logout();
        }
      );
    }
  }
}
