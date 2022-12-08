import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService} from './common.service';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url: string = environment.URL;

  constructor(private http: HttpClient,private commonService:CommonService) { }

  getOrders() {
    let dataUrl = `${this.url}order`;
    return this.http.get<any>(dataUrl).pipe(catchError(this.commonService.handleError))
  }

  getOrdersById(orderId: string) {
    let dataUrl = `${this.url}order/${orderId}`;
    return this.http.get<any>(dataUrl).pipe(catchError(this.commonService.handleError))
  }

  createOrder(order: Order) {
    let dataUrl = `${this.url}order`;
    return this.http.post<any>(dataUrl, order).pipe(catchError(this.commonService.handleError))
  }

  updateOrder(order: any) {
    let dataUrl = `${this.url}order/${order.id}`;
    return this.http.put<any>(dataUrl,order).pipe(catchError(this.commonService.handleError))
  }

  deleteOrder(id: number) {
    let dataUrl = `${this.url}order/${id}`;
    return this.http.delete<any>(dataUrl).pipe(catchError(this.commonService.handleError))
  }

}
