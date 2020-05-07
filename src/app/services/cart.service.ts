import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
export interface Products {
  id: number;
  name: string;
  price: number;
  amount: number;
}
export interface Prods {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: ImageBitmap;
}
export interface Extras{
  id: number;
  name: string;
  price: number;
}

export interface Employee{
  id:number;
   name:string;
   shopName:string;
   orderingData:Date;
   address:string;
   price:number;
  photoPath?:string;
  amount: number;
}

const ITEMS_KEY = 'myItems';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  constructor(private httpClient: HttpClient) { }

  private _viewProduct = "http://localhost:4000/viewMenu";
  private _viewCart = "http://localhost:4000/viewCart";
  private _addProduct ="http://localhost:4000/add";
  private _adminLogin ="http://localhost:4000/login";
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
  adminLogin(admin){
    return this.httpClient.post<any>(this._adminLogin,admin);
  }

  data: Product[] = [
    {id: 0, name: 'Full Chicken', price: 47.99, amount: 1},
    {id: 1, name: 'BBQ Beef', price: 52.99, amount: 1},
    {id: 2, name: 'Beef&Wors', price: 44.99, amount: 1},
    {id: 2, name: 'Wors', price: 60.99, amount: 1},
    {id: 2, name: '1/4 Ribs', price: 66.99, amount: 1},
  ];

  dat: Products[] = [
    {id: 0, name: 'Chips', price: 22.94, amount: 1},
    {id: 1, name: 'Kota: Russian,Cheese,Eggs', price: 32.99, amount: 1},
    {id: 2, name: 'Kota: Vianna,Polony,Garlic', price: 18.99, amount: 1},
    {id: 2, name: 'Kota: Russian,Polony,Garlic', price: 20.99, amount: 1},
    {id: 2, name: 'Kota: Beef', price: 18.99, amount: 1}
  ];

  datas: Products[] = [
    {id: 0, name: 'Skopo', price: 29.99, amount: 1},
    {id: 1, name: 'Mogodu&Pap', price: 43.99, amount: 1},
    {id: 2, name: 'Marapo', price: 19.99, amount: 1},
    {id: 2, name: 'Chicken&Pap', price: 28.99, amount: 1},
    {id: 2, name: '2 Wings', price: 15.99, amount: 1},
    {id: 2, name: 'Maotwana&Pap', price: 19.99, amount: 1},
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
  }

  getProducts() {
    return this.data;
  }
  getProduct() {
    return this.dat;
  }
  getProds() {
    return this.datas;
  }
  getCart() {
    return this.cart;
  }
  getCheckout(){
    return this.checkout;
  }
  getExt(){
    return this.ext;
  }
  getExtras(){
    return this.datar;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }
  extraProd(product){
    let added = false;
    for(let p of this.ext){
      if(p.id === product.id){
        added = true;
        break;
      }
    }
    if(!added){
      this.ext.push(product);
    }
  }
  removeExtra(product){
    for(let [index, p] of this.ext.entries()){
      if(p.id === product.id){
          this.ext.splice(index, 1);
      }
    }
  }
  
  addProduct(product){
    let added = false;
    for (const p of this.cart) {
      if (p.item_id === product.item_id) {
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
      if (p.item_id === product.item_id) {
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

  //checkout
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
