import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routing
import { SalesTableLojRoutingModule } from './sales-table-loj-routing.module';

// Pages
import { SalesTableLojComponent } from './sales-table-loj.component';

// Componente Visual
import { CalendarModule } from 'primeng/calendar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/growl';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    FormsModule,
    SalesTableLojRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CalendarModule,
    RadioButtonModule,
    ChartModule,
    TableModule,
    GrowlModule,
    KeyFilterModule,
    NgxLoadingModule,
    CommonModule
  ],
  declarations: [ SalesTableLojComponent ]
})
export class SalesTableLojModule { }
