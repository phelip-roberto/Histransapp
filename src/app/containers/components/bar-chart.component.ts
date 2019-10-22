import { Component, OnChanges, Input } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
   selector: 'app-bar-chart',
   templateUrl: './bar-chart.component.html',
})

export class BarChartComponent implements OnChanges {
   constructor() { }

   @Input()
      datas: any;

   ngOnChanges() {
      this.barChartLabels = this.datas.xvalue;
      this.barChartData = [{
         data: this.datas.yvalue,
         label: 'Transações'
      }];
   }

   public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    public barChartLabels: Label[];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];
  
   public barChartData: ChartDataSets[];
    
}
