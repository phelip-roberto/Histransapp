import { Component, OnInit} from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
   selector: 'app-testes',
   templateUrl: './testes.component.html',
   styleUrls: ['./testes.component.scss']
})

export class TestesComponent implements OnInit {
   constructor() { }

   ngOnInit() {
      Highcharts.chart('highchart', {
         chart: {
            alignTicks: false,
            width: 800
         },
         rangeSelector: { selected: 1 },
         title: { text: 'Highchart Teste' },
         series: [{
            type: 'column',
            name: 'Teste',
            data: [
               [10, 20],
               [20, 30],
               [30, 40],
               [40, 50],
               [50, 30],
               [60, 40]
            ],

            dataGrouping: {
               units: [[
                  'week', // unit name
                  [1] // allowed multiples
               ], [
                  'month',
                  [1, 2, 3, 4, 5, 6]
               ]]
            }
         }]
      });
   }
}
