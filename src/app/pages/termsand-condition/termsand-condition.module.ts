import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsandConditionPageRoutingModule } from './termsand-condition-routing.module';

import { TermsandConditionPage } from './termsand-condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsandConditionPageRoutingModule
  ],
  declarations: [TermsandConditionPage]
})
export class TermsandConditionPageModule {}
