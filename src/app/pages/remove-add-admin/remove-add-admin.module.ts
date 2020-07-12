import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveAddAdminPageRoutingModule } from './remove-add-admin-routing.module';

import { RemoveAddAdminPage } from './remove-add-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveAddAdminPageRoutingModule
  ],
  declarations: [RemoveAddAdminPage]
})
export class RemoveAddAdminPageModule {}
