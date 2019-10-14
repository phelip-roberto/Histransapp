import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from './../../services/user.service';
import { User } from '../../domain/user';
import { navItems } from '../../_nav';
import { navItemsLoj } from '../../_navLoj';
import { EncrDecrService } from '../../services/encrdecr.service';
import qs from 'qs';
import { Message } from '../../domain/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {

  public navItems = navItems;
  public navItemsLoj = navItemsLoj;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public userInfo: User = {
    name: '',
    login: 'default'
  };
  display = false;
  msgs: Message[] = [];

  constructor(public userService: UserService, private encrDecrService: EncrDecrService,
    private authService: AuthService, @Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit(): void {
    this.userInfo = qs.parse(this.encrDecrService.decript(localStorage.getItem('info')));

    if (this.userInfo.status == 4) {
      this.showDialog(this.userInfo.name);
    }
  }

  logout() {
    this.authService.logout();
  }

  showDialog(teste) {
    console.log(teste);
    this.display = true;
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
