import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerbListPagePage } from './herb-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: HerbListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerbListPagePageRoutingModule {}
