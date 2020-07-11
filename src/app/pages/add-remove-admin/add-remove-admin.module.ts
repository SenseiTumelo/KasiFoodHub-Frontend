import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRemoveAdminPageRoutingModule } from './add-remove-admin-routing.module';

import { AddRemoveAdminPage } from './add-remove-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRemoveAdminPageRoutingModule
  ],
  declarations: [AddRemoveAdminPage]
})
export class AddRemoveAdminPageModule {}
