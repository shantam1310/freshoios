import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponPopOverPageRoutingModule } from './coupon-pop-over-routing.module';

import { CouponPopOverPage } from './coupon-pop-over.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponPopOverPageRoutingModule
  ],
  declarations: [CouponPopOverPage]
})
export class CouponPopOverPageModule {}
