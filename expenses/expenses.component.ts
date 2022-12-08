import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExpensesService } from '../shared/service/expenses.service';
import {CommonService} from '../shared/service/common.service';
import { DialogConfirmComponent } from '../shared/components/dialog/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  dialogRef: MatDialogRef<any>;
  constructor(private route:Router,private dialog: MatDialog,private expenseService:ExpensesService,
    private commonService:CommonService) { }

  expenseData: any[] =[];


  loadExpenses(){
    this.expenseService.getExpenses().subscribe(res =>{
      this.expenseData=res;
    });
  }

  ngOnInit(): void {
    this.loadExpenses();
   
  }

  addExpense(){
    this.route.navigateByUrl('/sal/expenses/add');
  }
  request()
  {
    this.route.navigateByUrl('/sal/expenses/request');
  }

  editExpense(value:any)
  {
    this.route.navigate(['sal/expenses/update', value.id]);
  }

  discardExpense(value:any)
  {
    this.dialogRef = this.dialog.open(DialogConfirmComponent, this.commonService.confirmationDialogConfig);
    this.dialogRef.componentInstance.text='Do you want to Discard this Expense';
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.expenseService.deleteExpense(value.id).subscribe(res =>{
        this.loadExpenses();
      });
      }
    });

  }

}
