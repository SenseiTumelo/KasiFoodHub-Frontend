
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router } from '@angular/router';
import { ExtrasPage } from '../extras/extras.page';
import { PostProvider } from '../../../providers/post-provider'
import { Location } from '@angular/common';


@Component({
  selector: 'app-order2',
  templateUrl: './order2.page.html',
  styleUrls: ['./order2.page.scss'],
})
export class Order2Page implements OnInit {

  menuItems: any[];
  limit = 10;
  start = 0;
  cart = [];
  product = [];
  ext = [];
  menuList: Array<any> = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartService: CartService, private modalCtrl: ModalController, private location: Location, private router: Router,
    private postPvdr: PostProvider) { 

        this.loadMenu();

    }

  // ngOnInit() {
  //   this.product = this.cartService.getProduct();
  //   this.cart = this.cartService.getCart();
  //   this.cartItemCount = this.cartService.getCartItemCount();
  // }
  ngOnInit() {
    // this.cartService.getItems().subscribe((data:any) => {
    //   this.menuList = data.menu;
    //   console.log(this.menuList);
    // });
     // this.ext = this.cartService.getExt();
     this.cartItemCount = this.cartService.getCartItemCount();
  }

  ionViewWillEnter() {

    this.menuItems = [];
    this.start = 0;
    this.loadMenu();
  
  }

  addToCart(product) {
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
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceLeft');
    });
    modal.present();
  }

  async openExtras() {
    const modal = await this.modalCtrl.create({
      component: ExtrasPage,
      cssClass: 'extras'
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

loadMenu(){

  return new Promise(resolve => {

    const body = {

      aksi: 'getResInfo',
      limit: this.limit,
      start: this.start,

    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

          for (const menuItem of data.result) {
            this.menuItems.push(menuItem);

          }

          resolve(true);

        });

    });

 }

}