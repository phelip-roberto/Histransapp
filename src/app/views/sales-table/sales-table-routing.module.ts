import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesTableComponent } from './sales-table.component';

const routes: Routes = [
  {
    path: '',
    component: SalesTableComponent,
    data: {
      title: 'Vendas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTableRoutingModule {}
