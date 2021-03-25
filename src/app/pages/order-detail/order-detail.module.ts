import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OrderDetailPageRoutingModule } from "./order-detail-routing.module";

import { OrderDetailPage } from "./order-detail.page";
//import { ServService } from "src/app/services/serv.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailPageRoutingModule,
  ],
  declarations: [OrderDetailPage],
  // providers: [ServService],
})
export class OrderDetailPageModule {}
