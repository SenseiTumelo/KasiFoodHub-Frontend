import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // step 1


@Injectable({
  providedIn: 'root'
})
export class AdminService { // class name
  profile_url = 'http://localhost:6000/admin';  // step 2 variable
  overview_url = 'http://localhost:6000/'; // check

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
