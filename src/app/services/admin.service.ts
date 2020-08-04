import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // step 1


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  profile_url ='http://localhost:4000/admin';
  overview_url = 'http://localhost:4000/'; // check
  private _adminLogin ="http://localhost:4000/admin_login";

  constructor(private http: HttpClient) { }

  getProfile() { // this is a function

    return this.http.get(this.profile_url);
  }

  adminLogin(admin){
    return this.http.post<any>(this._adminLogin,admin);
  }
}
// thats all you need inside the service.. now we are goin to use this service anywhere were it is required
