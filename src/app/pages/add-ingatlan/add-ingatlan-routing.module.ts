import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngatlanComponent } from './add-ingatlan.component';

const routes: Routes = [{ path: '', component: AddIngatlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddIngatlanRoutingModule { }
