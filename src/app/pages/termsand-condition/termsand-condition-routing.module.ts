import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsandConditionPage } from './termsand-condition.page';

const routes: Routes = [
  {
    path: '',
    component: TermsandConditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsandConditionPageRoutingModule {}
