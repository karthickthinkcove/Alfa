import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/module/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';



@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    DashBoardRoutingModule
  ]
})
export class DashBoardModule { }
