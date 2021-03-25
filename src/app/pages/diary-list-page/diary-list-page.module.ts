import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryListPagePageRoutingModule } from './diary-list-page-routing.module';

import { DiaryListPagePage } from './diary-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryListPagePageRoutingModule
  ],
  declarations: [DiaryListPagePage]
})
export class DiaryListPagePageModule {}
