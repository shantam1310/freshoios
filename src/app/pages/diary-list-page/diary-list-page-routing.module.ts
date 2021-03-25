import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryListPagePage } from './diary-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryListPagePageRoutingModule {}
