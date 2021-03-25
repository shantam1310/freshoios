import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponPopOverPage } from './coupon-pop-over.page';

const routes: Routes = [
  {
    path: '',
    component: CouponPopOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponPopOverPageRoutingModule {}
