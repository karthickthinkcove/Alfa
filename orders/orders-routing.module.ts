import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ApprovedOrderComponent } from './approved-order/approved-order.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {path:'add',data: { title: 'Add Orders' },component:AddOrdersComponent},
  {path:'update/:id',data: { title: 'Update Orders' },component:AddOrdersComponent},
  {path:'approved',data: { title: 'Approved Order' },component:ApprovedOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
