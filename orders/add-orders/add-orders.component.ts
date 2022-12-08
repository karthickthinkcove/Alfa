import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from 'src/app/shared/model/product';
import { CommonService } from 'src/app/shared/service/common.service';
import { Dealer } from 'src/app/shared/model/dealer';
import { Order } from 'src/app/shared/model/order';
import { OrdersService } from 'src/app/shared/service/orders.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit {
  orderlst!:any[];
  dealer:Dealer[]=new Array<Dealer>();
  product:Product[]=new Array<Product>();
  productLst: Order = new Order();
  math = Math;
  temp = Array;
  addProduct!: any;
  constructor(private route: Router, private commonService: CommonService,
    private ele: ElementRef, private orderService: OrdersService, private routes: ActivatedRoute,) {
    this.routes.params.subscribe(params => {
      if(params['id']){
      this.getOrdersById(params['id']);
      }
    });
  }

  ngOnInit(): void {
    this.getBuyer();
    this.getProducts();
  }

  getBuyer() {
    this.commonService.getbuyer().subscribe(res => this.dealer = res);
  }

  getProducts(){
    this.commonService.getProducts().subscribe(res => this.product = res);
  }

  getOrdersById(id: string) {
    this.orderService.getOrdersById(id).subscribe(res =>
      this.productLst = res,
      (error) => console.log(error));
  }

  cancelOrders() {
    this.route.navigateByUrl('/sal/orders');
    if (this.ele.nativeElement.ownerDocument.body.getElementsByClassName('content')[0]) {
      this.ele.nativeElement.ownerDocument.body.getElementsByClassName('content')[0].style.background = '';
    }
  }

  submit() {
    if (this.productLst && this.productLst.id) {
      this.orderService.updateOrder(this.productLst).subscribe(res => {
        this.commonService.snackbarSuccess('Updated Sucessfully');
        this.productLst=new Order();
        this.cancelOrders();
      }, (error) => console.log(error));
    } else {
    this.orderService.createOrder(this.productLst).subscribe(res => {
      this.commonService.snackbarSuccess('Saved Orders Sucessfully');
     this.productLst=new Order();
     this.cancelOrders();
     },(error) => console.log(error))
    }
  }

  addProducts(e: any) {
    if (this.productLst.addedProducts.length === 0) {
      this.productLst.addedProducts = [];
    }
    this.productLst.addedProducts.push({ name: e.name ,
      description: e.pack ,
      amount: e.mrp,
      quantity: 1 ,
      totalAmount: e.mrp
    });
    this.addProduct = {};
  }

  reduceCount(e: any) {
    e.quantity--;
    this.calAmount(e);
  }

  addCount(e: any) {
    e.quantity++;
    this.calAmount(e);
  }

  displayFn(state: any) {
    return state?.name;
  }

  calAmount(item: any) {
    item.totalAmount = item.quantity * item.amount;
  }

  calTotal() {
    return this.productLst.addedProducts.filter(x => x.totalAmount).reduce((sum, current) => sum + current.totalAmount, 0);

  }

}
