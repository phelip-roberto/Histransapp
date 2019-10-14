import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { ShopkeeperRoutingModule } from './shopkeeper-routing.module';

// Pages
import { ShopkeeperComponent } from './shopkeeper.component';

// Componente Visual
import { CalendarModule } from 'primeng/calendar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxLoadingModule } from 'ngx-loading';
import { GrowlModule } from 'primeng/growl';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    FormsModule,
    ShopkeeperRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CalendarModule,
    NgxLoadingModule,
    GrowlModule,
    TableModule,
    CommonModule
  ],
  declarations: [ ShopkeeperComponent ]
})
export class ShopkeeperModule { }
