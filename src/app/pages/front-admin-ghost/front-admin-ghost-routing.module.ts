import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontAdminGhostPage } from './front-admin-ghost.page';

const routes: Routes = [
  {
    path: '',
    component: FrontAdminGhostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontAdminGhostPageRoutingModule {}
