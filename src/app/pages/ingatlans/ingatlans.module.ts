import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngatlansRoutingModule } from './ingatlans-routing.module';
import { IngatlansComponent } from './ingatlans.component';
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';


@NgModule({
  declarations: [
    IngatlansComponent,
    ListComponent,
    ViewerComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    IngatlansRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IngatlansModule { }
