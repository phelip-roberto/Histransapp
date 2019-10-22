import { Component, OnChanges, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnChanges {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
        'rgba(255,255,0,0.3)',
        'rgba(25,25,112,0.3)',
        'rgba(255,69,0,0.3)',
        'rgba(139,0,0,0.3)',
        'rgba(255,20,147,0.3)',
        'rgba(127,255,212,0.3)',
        'rgba(139,0,139,0.3)',
        'rgba(0,100,0,0.3)',
        'rgba(139,69,19,0.3)',
        'rgba(54,54,54,0.3)',
        'rgba(128,128,0,0.3)',
        'rgba(0,0,128,0.3)',
        'rgba(139,0,139,0.3)',
        'rgba(210,105,30,0.3)'
      ],
    },
  ];

  @Input()
    datas: any;

  constructor() { }

  ngOnChanges() {
    this.pieChartLabels = this.datas.xvalue;
    this.pieChartData = this.datas.yvalue;
  }

}