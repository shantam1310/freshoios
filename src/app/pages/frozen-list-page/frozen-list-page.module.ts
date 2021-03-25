import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrozenListPagePageRoutingModule } from './frozen-list-page-routing.module';

import { FrozenListPagePage } from './frozen-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrozenListPagePageRoutingModule
  ],
  declarations: [FrozenListPagePage]
})
export class FrozenListPagePageModule {}
