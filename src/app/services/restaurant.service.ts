import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  private _orders = "http://localhost:4000/totalOrders";
  private _menu = "http://localhost:4000/viewMenu";
  private _profile = "http://local:4000/aRestaurant/:restuarant_id";
  
  getItems(){
   return this.httpClient.get<any>(this._menu);
  }
  getOrders(){
    return this.httpClient.get<any>(this._orders);
  }
  getProfile(){
    const url = "${this._profile}/${restuarant_id}"
    return this.httpClient.get<any>(url)
  }
  
}
