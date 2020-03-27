import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  jsonData: any; // search bar purpose

  constructor(private http: HttpClient) {
    // data for testing searchbar, this will be deleted !!!
    this.jsonData=[
      {"id":1,"label":"saw","name": "Sephahlo"},
      {"id":2,"label":"saw1","name":"Mogodu"},
      {"id":3,"label":"saw2","name":"malana"},
      {"id":4,"label":"saw2","name":"Gowdaman"},
      {"id":5,"label":"saw2","name":"Neethi"},
      {"id":6,"label":"saw2","name":"abirami1"},
      {"id":7,"label":"saw2","name":"abirami2"},
      {"id":8,"label":"saw2","name":"Harrish"},
      {"id":9,"label":"saw2","name":"Lokesh"},
      {"id":10,"label":"saw2","name":"Deepak"},
      {"id":11,"label":"saw2","name":"malliga"},
      {"id":12,"label":"saw2","name":"malliga"}

      ];

   }
  

  reg_url = '';
  log_url = '';
  show_rest_url = '';
  prof_url = '';
  admin_prof_url = 'http://168.172.185.4:3000/admin';
  cust_url = 'http://168.172.185.4:3000/customer';
 adminService(){
    return this.http.get<any>(this.admin_prof_url);//LOOL 
  }

  // this was used for testing the search bar
  filterItems(searchTerm){
 
    return this.jsonData.filter((item) => {
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
     });  

 }
}
