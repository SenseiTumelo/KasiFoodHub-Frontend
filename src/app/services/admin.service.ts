import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  profile_url ="http://localhost:6000/admin";
  constructor(private http: HttpClient) { }

  getProfile(){
  
    return this.http.get<any>(this.profile_url);  
  }
}
