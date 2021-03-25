import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerbListPagePageRoutingModule } from './herb-list-page-routing.module';

import { HerbListPagePage } from './herb-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerbListPagePageRoutingModule
  ],
  declarations: [HerbListPagePage]
})
export class HerbListPagePageModule {}
