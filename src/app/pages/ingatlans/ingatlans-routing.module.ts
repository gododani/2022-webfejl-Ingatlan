import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngatlansComponent } from './ingatlans.component';

const routes: Routes = [
  { path: '', component: IngatlansComponent },
  { path: 'successful-comment', loadChildren: () => import('./successul-comment/successul-comment.module').then(m => m.SuccessulCommentModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngatlansRoutingModule { }
