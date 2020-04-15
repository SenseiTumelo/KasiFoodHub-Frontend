import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
//import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
// import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

 result: any;
  userData = {"email":"","password":""};
  // tslint:disable-next-line: max-line-length
  constructor(private location: Location, private serv: ServiceproviderService , private route: Router /* , private authService: AuthenticationService */ ) { }

  ngOnInit() {
  }
  
  signin(){
    this.serv.loginData(this.userData.email, this.userData.password).subscribe(data => {this.result = data;console.log(this.result);});
  }




 back(){
   this.location.back();
 }


 gotoProfile(){
   this.route.navigateByUrl('/custprof');
 }

 /* auth guard
 loginUser(){
  this.authService.login();
}*/

}
