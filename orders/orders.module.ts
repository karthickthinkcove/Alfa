import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/module/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { ApprovedOrderComponent } from './approved-order/approved-order.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        OrdersComponent,
        AddOrdersComponent,
        ApprovedOrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        OrdersRoutingModule,
        SharedModule
    ]
})
export class OrdersModule { }
