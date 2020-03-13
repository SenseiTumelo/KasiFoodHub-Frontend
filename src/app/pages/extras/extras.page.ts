import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { config } from 'process';
import { Router } from '@angular/router';
@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {
  config: any="{ignoreBackdropClick: true, keyboard: false}";
  
  extra=[];
  cart = [];
  prod = [];
  ext = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart',{static:false,read: ElementRef})fab: ElementRef;

  constructor(private router: Router,private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.prod = this.cartService.getProds();
    this.cart = this.cartService.getCart();
    this.ext = this.cartService.getExt()
    this.cartItemCount = this.cartService.getCartItemCount();
    this.extra = this.cartService.getExtras();
  }

  addToCart(product){
    this.cartService.addProduct(product);
    //this.cartService.extraProd(product);
  }
  removeExtraItem(product){
    this.cartService.removeExtra(product);
  }
  async openCart(){
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated','bounceOutLeft')
    });
    modal.present();
  }
  async openExtras(){
    let modal = await this.modalCtrl.create({
      component: ExtrasPage,
      cssClass: 'extras'
    });
    modal.present();
  }

  close(){
    this.modalCtrl.dismiss();
  }
  
  flavor: string;

  radioChangeHandler(event,flavor){
    //this.flavor = event.target.value;
    console.log(event);
    this.router.navigateByUrl(`extras/(flavor:flavor/${flavor}`);
  }

  /*public test(event,flavor){

  }*/

}
