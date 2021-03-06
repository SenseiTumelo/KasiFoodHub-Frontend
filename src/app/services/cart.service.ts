// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// export interface Product {
//   amount: number;
//   id: number;
//   name: string;
//   price: number;
//   qty: number;
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() {}

//   // tslint:disable-next-line: member-ordering
//   data: Product[] = [
//     { id: 0, name: 'Dikilana', price: 15, qty: 0 },
//     { id: 1, name: 'Half Kop', price: 30, qty: 0 },
//     { id: 2, name: 'Steak & Pap', price: 50, qty: 0 },
//     { id: 3, name: 'Salad', price: 15, qty: 0 },
//     { id: 4, name: 'Samoosa', price: 10, qty: 0 },
//     { id: 5, name: 'Spathlo + cold drink', price: 40, qty: 0 },
//     { id: 6, name: 'Kasi Platter Mix', price: 150, qty: 0 },
//     { id: 7, name: 'Nqombhothi 2Litre', price: 8, qty: 0 },
//     { id: 8, name: 'Cold Drink', price: 20, qty: 0 },
//     { id: 9, name: 'Chips', price: 50, qty: 0 }
//   ];

//   // tslint:disable-next-line: member-ordering
//   public cart = [];
//   public cartItemCount = new BehaviorSubject(0);
//   getItems() {
//     // tslint:disable-next-line: quotemark
//   //  throw new Error("Method not implemented.");
//   return 'senseimahlangu finger guitars';
//   }
//   getExt(): any[] {
//     // tslint:disable-next-line: quotemark
//     throw new Error("Method not implemented.");
//   }
//   extraProd(product: any) {
//     // tslint:disable-next-line: quotemark
//     throw new Error("Method not implemented.");
//   }

//   getProducts() {
//     return this.data;
//   }
//   getCart() {
//     return this.cart;
//   }

//   getCartItemCount() {

//     return this.cartItemCount;

//   }

//   addProduct(product) {
//     let added = false;
//     for (const p of this.cart) {
//       if (p.id === product.id) {
//         p.qty += 1;
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.cart.push(product);
//     }
//     this.cartItemCount.next(this.cartItemCount.value + 1);
//     this.getCartItemCount();
//   }

//   decreaseProduct(product) {
//     for (const [index, p] of this.cart.entries()) {
//       if (p.id === product.id) {
//         p.qty -= 1;
//         if (p.qty === 0) {
//           this.cart.splice(index, 1);
//           // p.qty = 0;
//         }
//       }
//     }
//     this.cartItemCount.next(this.cartItemCount.value - 1);
//     this.getCartItemCount();
//   }

//   removeProduct(product) {
//     for (const [index, p] of this.cart.entries()) {
//       if (p.id === product.id) {
//         this.cartItemCount.next(this.cartItemCount.value - p.qty);
//         this.cart.splice(index, 1);
//       }
//     }
//   }

//   clearCart() {
//     this.cart.length = 0;
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
  export interface Extras {
       id: number;
       name: string;
       price: number;
     }
    
     export interface Employee {
       id: number;
        name: string;
        shopName: string;
        orderingData: Date;
        address: string;
        price: number;
       photoPath?: string;
       amount: number;
     }
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  constructor(private httpClient: HttpClient) { }


  private _viewProduct = "http://localhost:4000/viewMenu";
  private _viewCart = "http://localhost:4000/viewCart";
  private _addProduct ="http://localhost:4000/add";
  private _menu = "http://localhost:4000/viewrest1";
  private _menu2 = "http://localhost:4000/viewrest2";
  private _menu3 = "http://localhost:4000/viewrest3";

  responseData: any;
  
  private handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponse.error.message);
    }else{
      console.error('Client Side Error: ', errorResponse);
    }
  }

  registerData(name: string, surname: string, email: string, password: string, cpassword: string, cell_no: string) {

    // tslint:disable-next-line: max-line-length
    return this.httpClient.get('${this.reg_URL}?name=${name}&surname=${surname}&email=${email}&password=${password}&cell_no=${cell_no}').pipe(map(results => {
      this.responseData = results;
    }));
  }
  getCartItems(){
    return this.httpClient.get<any>(this._viewCart);
  }
  getItems(){
   return this.httpClient.get<any>(this._viewProduct);
  }
  addProductCart(prod){
    return this.httpClient.post<any>(this._addProduct,prod);
  }
  getMenu(){
    return this.httpClient.get<any>(this._menu);
  }
  getMenu2(){
    return this.httpClient.get<any>(this._menu2);
  }
  getMenu3(){
    return this.httpClient.get<any>(this._menu3);
  }
 
  data: Product[] = [
    { id: 0, name: 'Dikilana', price: 15, amount: 0 },
    { id: 1, name: 'Half Kop', price: 30, amount: 0 },
    { id: 2, name: 'Steak & Pap', price: 50, amount: 0 },
    { id: 3, name: 'Salad', price: 15, amount: 0 },
    { id: 4, name: 'Samoosa', price: 10, amount: 0 },
    { id: 5, name: 'Spathlo + cold drink', price: 40, amount: 0 },
    { id: 6, name: 'Kasi Platter Mix', price: 150, amount: 0 },
    { id: 7, name: 'Nqombhothi 2Litre', price: 8, amount: 0 },
    { id: 8, name: 'Cold Drink', price: 20, amount: 0 },
    { id: 9, name: 'Chips', price: 50, amount: 0 }
  ];

   datar: Extras[] =[
     {id:0, name:'Tomato Sauce',price:0.00},
     {id:1, name:'Mustard',price:1.99},
     {id:2, name:'Chilli Sauce',price:1.99},
     {id:3, name:'Spicy Cheese',price:3.46}
   ];

  employees:Employee[]=[
    {id:1,name:'Skopo',shopName:'Shisa Nyama',orderingData:new Date('10/25/1988'),address:'2427 Block L',price:49.99,photoPath:'assets/images/food1.png',amount:1},
    {id:2,name:'Kota',shopName:'KFC',orderingData:new Date('11/05/1978'),address:'024 Block H',price:79.50,photoPath:'assets/images/kota1.jpg',amount:1},
    {id:2,name:'Beef',shopName:'wimpy',orderingData:new Date('11/05/1978'),address:'014 Block vv',price:79.50,photoPath:'assets/images/food4.jpg',amount:1}
  ]

  private cart = [];
  private ext = [];
  private checkout = [];
  private cartItemCount = new BehaviorSubject(0);


  // read

  getEmploye(){
    return this.employees;
  return 'senseimahlangu finger guitars';
  }
 
  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.item_id === product.item_id) {
        p.num_items += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
    this.getCartItemCount();
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.item_id === product.item_id) {
        p.num_items -= 1;
        if (p.num_items === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.num_items);

          this.cart.splice(index, 1);
          
      }
    }
  }

  addToCheckout(product){
    let added = false;
    for(let p of this.checkout){
      if(p.id === product.id){
        added = true;
        break;
      }
    }
    if(!added){
      this.checkout.push(product);
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
