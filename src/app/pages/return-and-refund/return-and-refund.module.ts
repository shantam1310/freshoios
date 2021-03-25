import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnAndRefundPageRoutingModule } from './return-and-refund-routing.module';

import { ReturnAndRefundPage } from './return-and-refund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnAndRefundPageRoutingModule
  ],
  declarations: [ReturnAndRefundPage]
})
export class ReturnAndRefundPageModule {}
