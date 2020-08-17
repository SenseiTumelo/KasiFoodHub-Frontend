import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripeWebPageRoutingModule } from './stripe-web-routing.module';

import { StripeWebPage } from './stripe-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripeWebPageRoutingModule
  ],
  declarations: [StripeWebPage]
})
export class StripeWebPageModule {}
