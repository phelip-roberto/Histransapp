import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestesComponent } from './testes.component';

const routes: Routes = [
  {
    path: '',
    component: TestesComponent,
    data: {
      title: 'Testes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestesRoutingModule {}
