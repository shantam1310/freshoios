import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnersurjanPage } from './innersurjan.page';

const routes: Routes = [
  {
    path: '',
    component: InnersurjanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnersurjanPageRoutingModule {}
