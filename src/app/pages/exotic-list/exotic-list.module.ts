import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExoticListPageRoutingModule } from './exotic-list-routing.module';

import { ExoticListPage } from './exotic-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExoticListPageRoutingModule
  ],
  declarations: [ExoticListPage]
})
export class ExoticListPageModule {}
