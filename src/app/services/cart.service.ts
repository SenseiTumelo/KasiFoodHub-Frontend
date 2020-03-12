import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id: number;
  name: string;
  price: number;
  amount: number;
}
export interface Products{
  id: number;
  name: string;
  price: number;
  amount: number;
}
export interface Prods{
  id: number;
  name: string;
  price: number;
  amount: number;
  image: ImageBitmap;
}

export interface Employee{
  id:number;
   name:string;
   shopName:string;
   orderingData:Date;
   address:string;
   Price:string;
  photoPath?:string;
}

const ITEMS_KEY = 'myItems';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  //read
  getItems(){

  }

  data: Product[] = [
    {id:0, name:'Full Chicken', price:47.99, amount:1},
    {id:1, name:'BBQ Beef', price:52.99, amount:1},
    {id:2, name:'Beef&Wors', price:44.99, amount:1},
    {id:2, name:'Wors', price:60.99, amount:1},
    {id:2, name:'1/4 Ribs', price:66.99, amount:1},
  ];

  dat: Products[] = [
    {id:0, name:'Chips', price:22.94, amount:1},
    {id:1, name:'Kota: Russian,Cheese,Eggs', price:32.99, amount:1},
    {id:2, name:'Kota: Vianna,Polony,Garlic', price:18.99, amount:1},
    {id:2, name:'Kota: Russian,Polony,Garlic', price:20.99, amount:1},
    {id:2, name:'Kota: Beef', price:18.99, amount:1}
  ];

  datas: Products[] = [
    {id:0, name:'Skopo', price:29.99, amount:1},
    {id:1, name:'Mogodu&Pap', price:43.99, amount:1},
    {id:2, name:'Marapo', price:19.99, amount:1},
    {id:2, name:'Chicken&Pap', price:28.99, amount:1},
    {id:2, name:'2 Wings', price:15.99, amount:1},
    {id:2, name:'Maotwana&Pap', price:19.99, amount:1},
  ];

  employees:Employee[]=[
    {id:1,name:'Skopo',shopName:'Shisa Nyama',orderingData:new Date('10/25/1988'),address:'2427 Block L',Price:'R49.99',photoPath:'assets/images/food1.png'},
    {id:2,name:'Kota',shopName:'KFC',orderingData:new Date('11/05/1978'),address:'024 Block H',Price:'R79.50',photoPath:'assets/images/kota1.jpg'},
    {id:2,name:'Beef',shopName:'wimpy',orderingData:new Date('11/05/1978'),address:'014 Block vv',Price:'R79.50',photoPath:'assets/images/food4.jpg'}
  ]

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getEmploye(){
    return this.employees;
    
  }

  getProducts(){
    return this.data;
    
  }
  getProduct(){
    return this.dat;
  }
  getProds(){
    return this.datas;
  }
  getCart(){
    return this.cart;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for(let p of this.cart){
      if(p.id === product.id){
        p.amount += 1;
        added = true;
        break;
      }
    }
    if(!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value+1);
    
  }
  decreaseProduct(product){
    for(let [index, p] of this.cart.entries()){
      if(p.id === product.id){
        p.amount -= 1;
        if(p.amount == 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1)
  }
  removeProduct(product){
    for(let [index, p] of this.cart.entries()){
      if(p.id === product.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        
          this.cart.splice(index, 1);
      }
    }
  }
  
  disableCheckout(){
    if(this.cartItemCount.value == 0){
      (<HTMLInputElement> document.getElementById("check")).disabled = true;
    }else{
      (<HTMLInputElement> document.getElementById("check")).disabled = false;
    }
  }
}
