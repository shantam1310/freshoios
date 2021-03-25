import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrozenListPagePage } from './frozen-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: FrozenListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrozenListPagePageRoutingModule {}
