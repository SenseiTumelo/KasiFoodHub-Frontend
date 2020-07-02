import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singupadmin',
  templateUrl: './singupadmin.page.html',
  styleUrls: ['./singupadmin.page.scss'],
})
export class SingupadminPage implements OnInit {

    restuarant_id: number;
    restuarant_name: string = "";
    Plot_number: number;
    Street_name: string = "";
    Suburb: string = "";
    City: string = "";
    Province: string = "";
    Zip_code: number;
    pass_word: string = "";
    email_address: string = "";
    rest_status: string = "";

  constructor(   
    private route: Router,
    private postPvdr: PostProvider,
    private actRoute:ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  
    this.actRoute.params.subscribe((data:any) => {

      this.restuarant_id = data.id;
      this.restuarant_name = data.name;
      this.Plot_number = data.Pnumber;
      this.Street_name = data.Sname;
      this.Suburb = data.Sub_urb;
      this.City = data.city;
      this.Province = data.province;
      this.Zip_code = data.code;
      this.pass_word = data.password;
      this.email_address = data.e_address;
      this.rest_status = data.status;

      console.log(data);
            
    });
  
  }
  
  goHome()
 {

      return new Promise(resolve => {

        const body = {

          aksi: 'add',
          restuarant_name : this.restuarant_name,
          Plot_number : this.Plot_number,
          Street_name: this.Street_name,
          Suburb: this.Suburb,
          City: this.City,
          Province: this.Province,
          Zip_code: this.Zip_code,
          pass_word: this.pass_word,
          email_address: this.email_address,
          rest_status: this.rest_status,

        };
        
        this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
          this.route.navigate(['signin']);
          console.log('submit works');

        });

      });
  
      this.route.navigateByUrl('/home');

 }
 navAdmin(){
  return this.route.navigateByUrl('/vendor-admin')
}
 btnClear(){
  
}
//back button
backButton(){
  this.location.back();
 }


}

