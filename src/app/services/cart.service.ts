import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export class CartService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: variable-name
  private _addProduct = 'http://localhost:4000/viewMenu';
  // read
  // getItems(){
  //   return this.http.get<any>(this._addProduct);
  // }


  data: Product[] = [
    {id: 0, name: 'Full Chicken', price: 47.99, amount: 1},
    {id: 1, name: 'BBQ Beef', price: 52.99, amount: 1},
    {id: 2, name: 'Beef&Wors', price: 44.99, amount: 1},
    {id: 2, name: 'Wors', price: 60.99, amount: 1},
    {id: 2, name: '1/4 Ribs', price: 66.99, amount: 1},
  ];

  private cart = [];
  private ext = [];
  private cartItemCount = new BehaviorSubject(0);

  getItems() {
   return this.httpClient.get<any>(this._addProduct);
  }


  // read

  getEmploye() {
    
  }

  getProducts() {
    return this.data;
  }
  getProduct() {
  
  }
  getProds() {
   
  }
  getCart() {
    return this.cart;
  }

  getExt() {
    return this.ext;
  }
  getExtras() {
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  extraProd(product) {
    let added = false;
    for (const p of this.ext) {
      if (p.id === product.id) {
        added = true;
        break;
      }
    }
    if (!added) {
      this.ext.push(product);
    }
  }
  removeExtra(product) {
    for (const [index, p] of this.ext.entries()) {
      if (p.id === product.id) {
          this.ext.splice(index, 1);
      }
    }
  }
  addProduct(product) {

    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);

  }
  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);

        this.cart.splice(index, 1);

      }
    }
  }

  disableCheckout() {
    if (this.cartItemCount.value === 0) {
      (document.getElementById('check') as HTMLInputElement).disabled = true;
    } else {
      (document.getElementById('check') as HTMLInputElement).disabled = false;
    }
  }

}
