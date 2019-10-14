import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopkeeperComponent } from './shopkeeper.component';

const routes: Routes = [
   {
      path: '',
      component: ShopkeeperComponent,
      data: {
         title: 'Painel'
      }
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ShopkeeperRoutingModule { }
