import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  

  reg_url = '';
  log_url = '';
  show_rest_url = '';
  prof_url = '';
  admin_prof_url = 'http://168.172.185.4:3000/admin';

  adminService(){
    return this.http.get<any>(this.admin_prof_url); 
  }
}
