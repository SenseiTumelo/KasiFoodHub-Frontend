import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StripeWebPage } from './stripe-web.page';

const routes: Routes = [
  {
    path: '',
    component: StripeWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StripeWebPageRoutingModule {}
