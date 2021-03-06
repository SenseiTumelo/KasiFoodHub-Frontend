import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { config } from 'process';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {


  extra = [];
  cart = [];
  prod = [];
  ext = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  flavor: string;

  ngOnInit() {
    //this.prod = this.cartService.getProds();
    this.cart = this.cartService.getCart();
    this.ext = this.cartService.getExt();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.extra = this.cartService.getExtras();
  }
  // addToCarts(){
  //   this.cartService.addProductCart(this.menu).subscribe(
  //     res =>console.log(res)
  //     )
  // }

  ionViewWillAdd(ev: any){
    this.addSegment='res';
  }
  addFoodData(){
    this.cartService.addProductCart(this.addFood).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }
  addExtra(extr){
    this.cartService.extraProd(extr);
  }
  removeExtraItem(product){
    this.cartService.removeExtra(product);
  }

  close(){
    this.modalCtrl.dismiss();
  }
  
  flavor: string;
  
  radioChangeHandler(event: any){
    this.flavor = event.target.value;
    console.log(this.flavor);
  }
}
