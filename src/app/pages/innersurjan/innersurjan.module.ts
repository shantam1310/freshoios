import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnersurjanPageRoutingModule } from './innersurjan-routing.module';

import { InnersurjanPage } from './innersurjan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InnersurjanPageRoutingModule
  ],
  declarations: [InnersurjanPage]
})
export class InnersurjanPageModule {}
