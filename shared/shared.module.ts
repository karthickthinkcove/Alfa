import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './module/material-module';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GridComponent } from './components/grid/grid.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { DialogConfirmComponent } from './components/dialog/dialog-confirm/dialog-confirm.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    SideMenuComponent,
    BreadcrumbComponent,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    TableModule,
    TooltipModule,
    MenuModule,
    FlexLayoutModule
  ],
  exports: [LayoutComponent,GridComponent]
})
export class SharedModule { }
