import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnAndRefundPage } from './return-and-refund.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnAndRefundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnAndRefundPageRoutingModule {}
