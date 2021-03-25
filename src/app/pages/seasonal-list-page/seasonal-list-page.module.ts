import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonalListPagePageRoutingModule } from './seasonal-list-page-routing.module';

import { SeasonalListPagePage } from './seasonal-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonalListPagePageRoutingModule
  ],
  declarations: [SeasonalListPagePage]
})
export class SeasonalListPagePageModule {}
