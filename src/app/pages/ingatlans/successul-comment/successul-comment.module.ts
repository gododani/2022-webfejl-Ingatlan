import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessulCommentRoutingModule } from './successul-comment-routing.module';
import { SuccessulCommentComponent } from './successul-comment.component';


@NgModule({
  declarations: [
    SuccessulCommentComponent
  ],
  imports: [
    CommonModule,
    SuccessulCommentRoutingModule
  ]
})
export class SuccessulCommentModule { }
