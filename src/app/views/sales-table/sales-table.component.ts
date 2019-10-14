import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { SalesService } from './../../services/sales.service';
import { RequestErrorService } from '../../services/request-error.service';
import { Message } from '../../domain/message';
import { User } from './../../domain/user';
import qs from 'qs';
import { EncrDecrService } from '../../services/encrdecr.service';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class SalesTableComponent implements OnInit {

  pt: any;
  loading = false;
  msgs: Message[] = [];
  params: any;
  transactions: any = [];
  pageControl: any;
  totalTransactions: any;
  totalAmount: any;
  transType: any[] = [
    { 'id': 1, 'name': 'Crédito' },
    { 'id': 2, 'name': 'Débito' },
    { 'id': 3, 'name': 'Cancelamento' },
    { 'id': 4, 'name': 'Voucher' },
  ];
  userInfo: User;

  constructor(private salesService: SalesService, private errorService: RequestErrorService, private encrDecrService: EncrDecrService) {
  }

  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };

    this.userInfo = qs.parse(this.encrDecrService.decript(localStorage.getItem('info')));

    this.params = {
      net_id: this.userInfo.net_id,
      initial_date: null,
      final_date: null,
    };

    this.loading = true;

    this.salesService.getTransactions(this.params).subscribe(
      response => {
        this.fillData(response),
        this.loading = false;
      },
      error => {
        this.errorService.errorHandling(error),
        this.loading = false;
      }
    );
  }

  filterGetTransactions(formData) {
    this.loading = true;
    formData.net_id = this.userInfo.net_id;
    this.salesService.getTransactions(formData).subscribe(
      response => {
        this.fillData(response),
        this.loading = false;
      },
      error => {
        this.errorService.errorHandling(error),
        this.loading = false;
      }
    );
  }

  typeTrans(type) {
    switch (type) {
      case 1: {
        return 'Crédito';
      }
      case 2: {
        return 'Débito';
      }
      case 3: {
        return 'Cancelamento';
      }
      case 4: {
        return 'Voucher';
      }
    }
  }

  formatDate(date) {
    return this.salesService.formatToDate(date);
  }

  fillData(data) {
    this.transactions = data.transactions;
    this.pageControl = data.page_control;
    this.totalTransactions = data.totalTransactions;
    this.totalAmount = data.totalAmount;
  }

}
