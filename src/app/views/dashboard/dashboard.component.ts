import { Component, OnInit } from '@angular/core';
import { TransactionsSummaryService } from '../../services/transactions-summary.service';
import { RequestErrorService } from '../../services/request-error.service';
import { EncrDecrService } from '../../services/encrdecr.service';
import { User } from '../../domain/user';
import qs from 'qs';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // iniciadores de gráfico
  salesTypes: any;
  salesFlags: any;
  salesTotal: any;

  // valores para os gráficos
  values: any;
  barChart: any;
  pieChart: any;
  pieChart1: any;

  initial_date: Date = new Date();
  final_date: Date = new Date();
  pt: any;
  loading = false;
  totalVoid: any;
  totalTrans: any;
  totalAmount: any;
  percentVoid: any;
  selectedType = 'transaction';
  selectedPeriod = 'daily';
  userInfo: User;
  params: any;

  constructor(private summaryService: TransactionsSummaryService, private errorService: RequestErrorService,
    private encrDecrService: EncrDecrService) { }

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

    this.loading = true;

    if (localStorage.getItem('info')) {
      this.userInfo = qs.parse(this.encrDecrService.decript(localStorage.getItem('info')));

      if (this.userInfo.profile === 'Lojista') {
        this.initial_date.setDate(this.initial_date.getDate() - 7);
      } else {
        this.initial_date.setDate(this.initial_date.getDate() - 1);
      }
    }

    this.params = {
      net_id: this.userInfo.net_id,
      initial_date: this.initial_date,
      final_date: this.final_date,
      lapse: 'daily',
      type: 'transaction',
    };

    this.summaryService.getSummary(this.params).subscribe(
      response => {
        this.fillData(response),
        console.log('Summary Service - ', response),
        this.loading = false;
      },
      error => {
        this.errorService.errorHandling(error),
        this.loading = false;
      }
    );

  }

  filterSummary() {
    const filters = {
      initial_date: this.initial_date,
      final_date: this.final_date,
      type: this.selectedType,
      lapse: this.selectedPeriod,
      net_id: this.userInfo.net_id,
    };

    this.loading = true;
    this.summaryService.getSummary(filters).subscribe(
      response => {
        this.fillData(response),
        console.log('Summary Service - ', response),
        this.loading = false;
      },
      error => {
        this.errorService.errorHandling(error),
        this.loading = false;
      }
    );
  }

  formatArray(data) {

    return data.reports.map((report) => {
      return {
        'xvalue': report.sequence.map((sequence) => {
          return sequence.xvalue;
        }),
        'yvalue': report.sequence.map((sequence) => {
          return sequence.yvalue;
        })
      };
    });

  }

  fillData(data) {

    if (data == null) {
      return;
    }

    this.totalVoid = data.totalVoid;
    this.totalTrans = data.totalTrans;
    this.totalAmount = data.totalAmount;
    this.percentVoid = data.percentVoid;

    this.values = this.formatArray(data);

    this.barChart = this.values[0];
    this.pieChart = this.values[1];
    this.pieChart1 = this.values[2];

  }
}
