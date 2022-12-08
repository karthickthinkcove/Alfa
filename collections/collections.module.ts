import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/module/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { AddCollectionsComponent } from './add-collections/add-collections.component';


@NgModule({
  declarations: [
    CollectionsComponent,    
    AddCollectionsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CollectionsModule { }
