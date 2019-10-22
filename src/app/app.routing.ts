import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginModule',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [ AuthGuard ]
      },

      {
        path: 'sales-table',
        loadChildren: './views/sales-table/sales-table.module#SalesTableModule',
        canActivate: [ AuthGuard ]
      },

      {
        path: 'testes',
        loadChildren: './views/testes/testes.module#TestesModule',
      },

      {
        path: 'shopkeeper',
        loadChildren: './views/shopkeeper/shopkeeper.module#ShopkeeperModule',
        canActivate: [ AuthGuard ]
      },

      {
        path: 'sales-table-loj',
        loadChildren: './views/sales-table-loj/sales-table-loj.module#SalesTableLojModule',
        canActivate: [ AuthGuard ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
