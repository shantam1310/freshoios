import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitsListPagePageRoutingModule } from './fruits-list-page-routing.module';

import { FruitsListPagePage } from './fruits-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitsListPagePageRoutingModule
  ],
  declarations: [FruitsListPagePage]
})
export class FruitsListPagePageModule {}
