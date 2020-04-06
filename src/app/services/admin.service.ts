import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // tslint:disable-next-line: variable-name
  profile_url = 'http://localhost:3000/admin';
  // tslint:disable-next-line: variable-name
  overview_url = 'http://localhost:3000/'; // check
  constructor(private http: HttpClient) { }

  getProfile() {

    return this.http.get<any>(this.profile_url);
  }
}
