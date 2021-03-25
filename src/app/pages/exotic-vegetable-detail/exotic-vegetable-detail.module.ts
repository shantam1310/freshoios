import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExoticVegetableDetailPageRoutingModule } from './exotic-vegetable-detail-routing.module';

import { ExoticVegetableDetailPage } from './exotic-vegetable-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExoticVegetableDetailPageRoutingModule
  ],
  declarations: [ExoticVegetableDetailPage]
})
export class ExoticVegetableDetailPageModule {}
