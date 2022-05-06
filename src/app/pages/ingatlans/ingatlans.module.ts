import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngatlansRoutingModule } from './ingatlans-routing.module';
import { IngatlansComponent } from './ingatlans.component';
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class IngatlansModule { }
