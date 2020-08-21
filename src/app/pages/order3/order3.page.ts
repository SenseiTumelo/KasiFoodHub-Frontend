
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ExtrasPage } from '../extras/extras.page';

import { Location } from '@angular/common';

@Component({
  selector: 'app-order3',
  templateUrl: './order3.page.html',
  styleUrls: ['./order3.page.scss'],
})

export class Order3Page implements OnInit {

  constructor(private cartService: CartService, private modalCtrl: ModalController, private location: Location) { }
  cart = [];
  product = [];
  ext = [];
  cartItemCount: BehaviorSubject<number>;
  menuList: any;
  

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  enableBackdropDismiss = true;

  ngOnInit() {
    this.cartService.getMenu3().subscribe(data => {
      console.log(data);
      this.menuList = data.data;
      console.log(this.menuList);
    });
    this.ext = this.cartService.getExt();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  
  addToCart(product){
    this.animateCSS('tada');
    this.cartService.addProduct(product);
  }
  exProduct(product) {
    this.cartService.extraProd(product);
  }
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal',
      animated: true,
      showBackdrop: true
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceLeft');
    });
    modal.present();
  }
  
  async openExtras(){
    let modal = await this.modalCtrl.create({
      component: ExtrasPage,
      cssClass: 'extras',
      showBackdrop: true,
      backdropDismiss: false
    });
    modal.present();

  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }
// back button
backButton() {
  this.location.back();
 }


}
