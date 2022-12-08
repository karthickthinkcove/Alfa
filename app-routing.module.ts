import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';

import { AuthGuard } from './shared/service/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'sal',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) },
      { path: 'orders', data: { title: 'Orders' },loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
      { path: 'expenses',data: { title: 'Expenses' }, loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule) },
      { path: 'collections',data: { title: 'Collections' }, loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule) },
    ]
  },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
