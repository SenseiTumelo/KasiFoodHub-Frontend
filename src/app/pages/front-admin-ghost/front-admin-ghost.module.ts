import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontAdminGhostPageRoutingModule } from './front-admin-ghost-routing.module';

import { FrontAdminGhostPage } from './front-admin-ghost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontAdminGhostPageRoutingModule
  ],
  declarations: [FrontAdminGhostPage]
})
export class FrontAdminGhostPageModule {}
