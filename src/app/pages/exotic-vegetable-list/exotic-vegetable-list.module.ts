import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExoticVegetableListPageRoutingModule } from './exotic-vegetable-list-routing.module';

import { ExoticVegetableListPage } from './exotic-vegetable-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExoticVegetableListPageRoutingModule
  ],
  declarations: [ExoticVegetableListPage]
})
export class ExoticVegetableListPageModule {}
