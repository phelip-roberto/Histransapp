import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { DashboardRoutingModule } from './dashboard-routing.module';

// Pages
import { DashboardComponent } from './dashboard.component';

// Componente Visual
import { CalendarModule } from 'primeng/calendar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgxLoadingModule } from 'ngx-loading';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../../containers/components/bar-chart.component';
import { PieChartComponent } from '../../containers/components/pie-chart.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CalendarModule,
    RadioButtonModule,
    ChartsModule,
    NgxLoadingModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    BarChartComponent,
    PieChartComponent
  ],
})
export class DashboardModule { }
