import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitsListPagePage } from './fruits-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: FruitsListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsListPagePageRoutingModule {}
