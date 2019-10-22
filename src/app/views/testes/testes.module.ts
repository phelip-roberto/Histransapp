import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { TestesRoutingModule } from './testes-routing.module';

// Pages
import { TestesComponent } from './testes.component';

// Componente Visual
import { CalendarModule } from 'primeng/calendar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../../containers/components/bar-chart.component';
import { PieChartComponent } from '../../containers/components/pie-chart.component';

@NgModule({
  imports: [
    TestesRoutingModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CalendarModule,
    RadioButtonModule,
    ChartModule,
    ChartsModule,
    TableModule
  ],
  declarations: [
    TestesComponent,
    BarChartComponent,
    PieChartComponent,
  ]
})
export class TestesModule { }
