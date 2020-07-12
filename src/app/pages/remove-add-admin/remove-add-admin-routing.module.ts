import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveAddAdminPage } from './remove-add-admin.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveAddAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveAddAdminPageRoutingModule {}
