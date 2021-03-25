import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExoticListPage } from './exotic-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExoticListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoticListPageRoutingModule {}
