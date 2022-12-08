import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {CommonService} from './common.service';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  url: string = environment.URL;

  constructor(private http: HttpClient,private commonService:CommonService) { }

  getExpenseConstant() {
    let dataUrl = `${this.url}expenseConstants`;
    return this.http.get<any>(dataUrl).pipe(catchError(this.commonService.handleError))
  }

  getExpenses() {
    let dataUrl = `${this.url}expense`;
    return this.http.get<any>(dataUrl).pipe(catchError(this.commonService.handleError))
  }
  getExpensesById(expenseId: string) {
    let dataUrl = `${this.url}expense/${expenseId}`;   
    return this.http.get<Expense>(dataUrl).pipe(catchError(this.commonService.handleError))
  }

  createExpense(expense: Expense) {
    let dataUrl = `${this.url}expense`;
    return this.http.post<any>(dataUrl, expense).pipe(catchError(this.commonService.handleError))
  }

  updateExpense(expense: any) {
    let dataUrl = `${this.url}expense/${expense.id}`;
    return this.http.put<any>(dataUrl,expense).pipe(catchError(this.commonService.handleError))
  }

  deleteExpense(id: string) {
    let dataUrl = `${this.url}expense/${id}`;
    return this.http.delete<any>(dataUrl).pipe(catchError(this.commonService.handleError))
  }

}
