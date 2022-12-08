import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/model/order';
import { OrdersService } from 'src/app/shared/service/orders.service';

@Component({
  selector: 'app-approved-order',
  templateUrl: './approved-order.component.html',
  styleUrls: ['./approved-order.component.scss']
})
export class ApprovedOrderComponent implements OnInit {
  columns: any;
  data: any;
  download!: boolean;
  search!: boolean;
  


  constructor(private ordersService:OrdersService) {}
     orderData: Order[] =new Array<Order>();
     orderList: Order[] =new Array<Order>();
   

  ngOnInit(): void {
    this.loadColumns();
    this.download = true;
    this.search = false;
    this.orderslist();
  }
  loadColumns() {
    this.columns = [
      { field: 'buyerName', header: 'BuyerName', style: { width: '100px', color: "" }, toolTip: 'BuyerName', sortfield: false, hideorShow: true },
      { field: 'addedProducts.name', header: 'AddedProducts', style: { width: '100px' }, color: "", toolTip: 'AddedProducts', sortfield: true, hideorShow: true, chip: true },      
      { field: 'addedProducts.amount', header: 'Amount', style: { width: '100px', color: "", alignment: "" }, toolTip: 'Amount', sortfield: true, hideorShow: true },
      { field: 'addedProducts.quantity', header: 'Quantity', style: { width: '100px', color: "", alignment: "" }, toolTip: 'Quantity', sortfield: true, hideorShow: true },
      { field: 'addedProducts.totalAmount', header: 'TotalAmount', style: { width: '100px', color: "", alignment: "" }, toolTip: 'TotalAmount', sortfield: true, hideorShow: true },
      
    ];
  }
  orderslist() {
    this.ordersService.getOrders().subscribe((res: any[]) =>{
      this.orderData=this.orderList=res;
    });   
    
}
rowAction(e: any) {
  alert(e.data.name + "      Actions  " + e.value);
}
}