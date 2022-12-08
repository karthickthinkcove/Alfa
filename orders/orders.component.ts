import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../shared/service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersData: any[] =[];
  constructor(private route:Router,private ele:ElementRef,private orderService:OrdersService) { }

  loadOrders(){
    this.orderService.getOrders().subscribe(res =>this.ordersData=res);
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  
  addOrders(){
    this.route.navigateByUrl('/sal/orders/add');
    
    if(this.ele.nativeElement.ownerDocument.body.getElementsByClassName('content')[0]){
      this.ele.nativeElement.ownerDocument.body.getElementsByClassName('content')[0].style.background='#fffffffa';
    }
  }

  editOrders(value:any)
  {
    this.route.navigate(['sal/orders/update', value.id]);
  }
  approved()
  {
    this.route.navigateByUrl('/sal/orders/approved');
  }

  getSum(e:any){
    let sum = 0;
    for(let i = 0; i < e.length; i++) {
      sum += e[i].totalAmount;
    }
    return sum;
  }

}
