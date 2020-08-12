import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // step 1


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  profile_url ='http://localhost:4000/admin';
  overview_url = 'http://localhost:4000/'; // check
  private _adminLogin ="http://localhost:4000/admin_login";

  loggedIn = false;

  constructor(private http: HttpClient) { }

  getProfile() { // this is a function

    return this.http.get(this.profile_url);
  }

  adminLogin(email){
    return this.http.get<any>(this._adminLogin,email
      ).pipe();
  }

}
// thats all you need inside the service.. now we are goin to use this service anywhere were it is required
