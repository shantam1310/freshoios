import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExoticVegetableListPage } from './exotic-vegetable-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExoticVegetableListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoticVegetableListPageRoutingModule {}
