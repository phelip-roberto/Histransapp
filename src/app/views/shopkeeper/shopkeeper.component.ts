import { Component, OnInit } from '@angular/core';

import { RequestErrorService } from '../../services/request-error.service';
import { EncrDecrService } from '../../services/encrdecr.service';

import { Message } from '../../domain/message';
import { User } from '../../domain/user';

import qs from 'qs';

@Component({
  selector: 'app-shopkeeper',
  templateUrl: './shopkeeper.component.html',
  styleUrls: ['./shopkeeper.component.scss']
})
export class ShopkeeperComponent implements OnInit {

  loading = false;
  msgs: Message[] = [];
  userInfo: User;
  terminais = [
    { model: 'MP20', numLog: '00000001', numSer: '1000000252525', nick: 'Delivery' },
    { model: 'GPOS400', numLog: '00000002', numSer: '100000099831', nick: 'Balcão' },
    { model: 'GPOS700', numLog: '00000003', numSer: '1008881233934', nick: 'Garçom' },
  ];

  constructor(private errorService: RequestErrorService, private encrDecrService: EncrDecrService) { }

  ngOnInit() {

    this.userInfo = qs.parse(this.encrDecrService.decript(localStorage.getItem('info')));

  }

}
