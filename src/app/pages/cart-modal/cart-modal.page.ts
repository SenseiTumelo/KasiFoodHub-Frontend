import { Product, CartService } from '../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product, CartService, Extras } from 'src/app/services/cart.service';
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
  ext: Extras[] = [];
  priceAmnt: any;

  
  constructor(public http:HttpClient,public platform:Platform, public activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private navCtrl: NavController,private cartService: CartService, private modalCtrl: ModalController,private router: Router){
    // this.platform.ready().then(()=>{
    //   this.cartAdd();
    // }) 

  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.ext = this.cartService.getExt();
    this.cartService.disableCheckout();
    // this.cartService.getCartItems().subscribe(data => {
    //   console.log(data);
    //   this.cart = data.data;
    //   console.log(this.cart);
    // });
  }

  
  // cartAdd(){
  //   var dataToSend = {
  //     order_id:2,name:"kota",price:57.96,qty:2,totalAmt:78
  //   };
  //   var url ="http://localhost:4000/add";
  //   this.http.post(url,{data:JSON.stringify(dataToSend)},{headers:new HttpHeaders(
  //     {"content-Type":"application/json"}
  //   )}).subscribe(
  //     (data)=>{
  //       alert(data);
  //     }
  //   )

  // }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  
  checkoutProduct(product){
    this.cartService.addToCheckout(product);
  }

  getTotal(){
    this.priceAmnt = this.cart.reduce((i,j) => i + j.item_price * j.amount, 0);
    return this.priceAmnt;
  }

  user ={
    name: 'Nthabi',
    price: this.priceAmnt
  }

  close() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/home');
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

    const cartCount =  this.cart.length;
    console.log('cart item count: ' + cartCount);

    this.cartService.clearCart();


    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Payment options ahead',
      message: 'Please make sure to enter correct info',
      buttons: ['Ok !!']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
    this.router.navigateByUrl('/checkout');

  }
}
