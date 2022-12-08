import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ApprovedRequestComponent } from './approved-request/approved-request.component';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [
  { path: '', component: ExpensesComponent },
  {path:'add',data: { title: 'Add Expenses' },component:AddExpensesComponent},
  {path:'update/:id',data: { title: 'Update Expenses' },component:AddExpensesComponent},
  {path:'request',data: { title: 'Approved Request' },component:ApprovedRequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
