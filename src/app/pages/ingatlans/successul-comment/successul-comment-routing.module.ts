import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessulCommentComponent } from './successul-comment.component';

const routes: Routes = [{ path: ':userId', component: SuccessulCommentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessulCommentRoutingModule { }
