import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesTableLojComponent } from './sales-table-loj.component';

const routes: Routes = [
  {
    path: '',
    component: SalesTableLojComponent,
    data: {
      title: 'Vendas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTableLojRoutingModule {}
