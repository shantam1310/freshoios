import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExoticDetailPageRoutingModule } from './exotic-detail-routing.module';

import { ExoticDetailPage } from './exotic-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExoticDetailPageRoutingModule
  ],
  declarations: [ExoticDetailPage]
})
export class ExoticDetailPageModule {}
