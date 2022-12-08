import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseConstants } from 'src/app/shared/model/constants';
import { Expense } from 'src/app/shared/model/expense';

import { ExpensesService } from 'src/app/shared/service/expenses.service';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {

  expenseConstants: ExpenseConstants = new ExpenseConstants();
  expenses: Expense = new Expense();
  @ViewChild('fileInput') attachment: any;
  journey!: any;
  categorySelected!: any;

  constructor(private route: Router, private expenseService: ExpensesService,
    private routes: ActivatedRoute,
    private ele: ElementRef,  private commonService: CommonService) {
      this.loadConstants();
    this.routes.params.subscribe(params => {
      if(params['id']){
      this.getExpenseById(params['id']);
      }
    });

  }

  ngOnInit(): void {
    if (this.ele.nativeElement.ownerDocument.body.getElementsByClassName('content')[0] && this.route.url === '/sal/expenses/add') {
      this.ele.nativeElement.ownerDocument.body.getElementsByClassName('content')[0].style.background = '#fffffffa';
    }
  }

  loadConstants() {
    this.expenseService.getExpenseConstant().subscribe(
      res => this.expenseConstants = res
    );
  }

  getExpenseById(id: string) {
    this.expenseService.getExpensesById(id).subscribe(res =>
      this.expenses = res,
      (error) => console.log(error));
  }

  cancelExpense() {
    this.expenses = new Expense();
    this.route.navigateByUrl('/sal/expenses');
  }

  submit() {
    if (this.expenses && this.expenses.id) {
      this.expenseService.updateExpense(this.expenses).subscribe(res => {
        this.commonService.snackbarSuccess('Updated Sucessfully');
        this.cancelExpense();
      }, (error) => console.log(error));
    } else {
      this.expenseService.createExpense(this.expenses).subscribe(res => {
        this.commonService.snackbarSuccess('Saved Sucessfully');
        this.cancelExpense();
      }, (error) => console.log(error));
    }
  }

  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      if (this.expenses.billAttachment.indexOf(selectedFile.name) === -1) {

        this.expenses.billAttachment.push({ name: selectedFile.name, size: selectedFile.size });
      }
    }
    this.attachment.nativeElement.value = null;
  }

  removeSelectedFile(index: any) {
    // Delete the item from fileNames list
    this.expenses.billAttachment.splice(index, 1);
    // delete file from FileList

  }

  addLocations(event: any) {
    this.expenses.particularsJourney.push({ name: event.name });
    this.journey = {};
  }

  removeLocations(index: any) {
    // Delete the item from Location list
    this.expenses.particularsJourney.splice(index, 1);

  }

  displayFn(type: any) {
    if (!type) return '';

    let index = this.expenseConstants.expenseCategory.findIndex(s => s.type === type);
    return this.expenseConstants.expenseCategory[index].value;
  }

  displayFns(value: any) {
    return value?.name;
  }

  selectedCategory(e: any) {
    this.expenses.category = e;
  }

}
