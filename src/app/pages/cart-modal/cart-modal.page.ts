import { Component, OnInit } from '@angular/core';
import { Product, CartService} from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  composersForm: FormGroup;
  cart: Product[] = [];
  value: any;

  // tslint:disable-next-line: max-line-length
  constructor(public activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private navCtrl: NavController, private cartService: CartService, private modalCtrl: ModalController, private router: Router) {

  }

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

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout() {
    this.router.navigate(['checkout']);
    /*disable button if cart is empty
      clear all*/

  }


}
