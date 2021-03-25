import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExoticDetailPage } from './exotic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExoticDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoticDetailPageRoutingModule {}
