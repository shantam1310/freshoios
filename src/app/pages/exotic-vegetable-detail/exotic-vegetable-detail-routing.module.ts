import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExoticVegetableDetailPage } from './exotic-vegetable-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExoticVegetableDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoticVegetableDetailPageRoutingModule {}
