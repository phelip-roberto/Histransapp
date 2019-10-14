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

  initial_date: Date;
  final_date: Date;
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
    }

    this.params = {
      net_id: this.userInfo.net_id,
      initial_date: null,
      final_date: null,
      lapse: 'daily',
      type: 'transaction',
    };

    this.summaryService.getSummary(this.params).subscribe(
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

    this.salesTotal = {
      labels: this.values[0].xvalue,
      datasets: [
        {
          label: '',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: this.values[0].yvalue
        },
      ]
    };

    this.salesTypes = {
      labels: this.values[1].xvalue,
      datasets: [
        {
          data: this.values[1].yvalue,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }
      ]
    };

    this.salesFlags = {
      labels: this.values[2].xvalue,
      datasets: [
        {
          data: this.values[2].yvalue,
          backgroundColor: [
            '#4169E1',
            '#A52A2A',
            '#9ACD32',
            '#9932CC'
          ],
          hoverBackgroundColor: [
            '#4169E1',
            '#A52A2A',
            '#9ACD32',
            '#9932CC'
          ]
        }
      ]
    };
  }
}
