import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from './../../domain/message';
import { User } from '../../domain/user';

import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EncrDecrService } from './../../services/encrdecr.service';

import qs from 'qs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

  msgs: Message[] = [];
  loading = false;
  recoverPass = false;
  userInfo: User;

  constructor(private router: Router, private authService: AuthService,
    private userService: UserService, private encrDecrService: EncrDecrService) { }

  doLogin(userLogin) {
    this.loading = true;
    this.authService.doLogin(userLogin).subscribe(
      () => {
        this.userService.userInfo().subscribe(
          response => {
            this.userInfo = response;
            const encrypted = this.encrDecrService.encrypt(qs.stringify(this.userInfo));
            localStorage.setItem('info', encrypted);
            this.loading = false;
            this.router.navigate(['/dashboard']);
            console.log('userService - ', response);
          },
        );
      },
      error => {
        this.loading = false;
        this.msgs.push({severity: 'error', summary: 'Não é Possível Realizar o Login',
          detail: 'Login ou senha incorretos. Por favor, tento novamente!'});
      }
    );
  }

  sendRecover(recoverInfo) {
    this.msgs.push({severity: 'success', summary: 'Recuperação de Senha',
      detail: 'Um e-mail foi enviado para que você possa recuperar sua senha!'});
    this.recoverPass = !this.recoverPass;
  }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('info');
  }
}
