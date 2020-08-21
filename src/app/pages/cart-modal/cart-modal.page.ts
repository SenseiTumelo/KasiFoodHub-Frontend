import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { empty } from 'rxjs';
import { Validators,FormBuilder,FormGroup} from '@angular/forms';
import { NavController} from "@ionic/angular";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Platform} from '@ionic/angular';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  composersForm: FormGroup; 
  cart: any;
  ext = [];
  priceAmnt: any;

  // tslint:disable-next-line: max-line-length
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  
  checkoutProduct(product){
    //this.cartService.addToCheckout(product);
  }

  getTotal(){
    this.priceAmnt = this.cart.reduce((i,j) => i + j.price * j.num_items, 0);
    return this.priceAmnt;
  }

  user ={
    name: 'Nthabi',
    price: this.priceAmnt
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout(){
    this.router.navigate(['checkout']);
  //     let navigationExtras: NavigationExtras={
  //       state:{
  //        user: this.user
  //       }
  //     }
  //    this.router.navigate(['checkout'],navigationExtras);
    
   }
}
