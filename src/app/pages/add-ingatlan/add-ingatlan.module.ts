import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddIngatlanRoutingModule } from './add-ingatlan-routing.module';
import { AddIngatlanComponent } from './add-ingatlan.component';


@NgModule({
  declarations: [
    AddIngatlanComponent
  ],
  imports: [
    CommonModule,
    AddIngatlanRoutingModule
  ]
})
export class AddIngatlanModule { }
