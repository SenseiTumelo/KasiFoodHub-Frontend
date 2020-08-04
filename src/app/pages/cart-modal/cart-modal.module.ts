// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { CartModalPageRoutingModule } from './cart-modal-routing.module';

// import { CartModalPage } from './cart-modal.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     CartModalPageRoutingModule,
//     ReactiveFormsModule
//   ],
//   declarations: [CartModalPage]
// })
// export class CartModalPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartModalPage } from './cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CartModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartModalPage]
})
export class CartModalPageModule {}
