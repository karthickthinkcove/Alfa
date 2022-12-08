import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/module/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ApprovedRequestComponent } from './approved-request/approved-request.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ExpensesComponent,
        AddExpensesComponent,
        ApprovedRequestComponent
    ],
    imports: [
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        HttpClientModule,
        ExpensesRoutingModule,
        SharedModule
    ]
})
export class ExpensesModule { }
