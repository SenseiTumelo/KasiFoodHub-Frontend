import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AlertService } from 'src/app/services/alert.service';
import { IonSegment } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient,HttpErrorResponse} from '@angular/common/http'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  login: any;

  loginUserData = {
    email_address: "",
    password:  ""
  };

  constructor(private alertService: AlertService,private cartService: CartService,private router: Router) { }

  ngOnInit() {
  }

  //Methods that get and post data [Login and Registration]
  async signIn(){

    //Validation
     if(this.loginUserData.email_address ==""){
       this.alertService.presentToast("Provide email");
     }else if(this.loginUserData.password ==""){
       this.alertService.presentToast("Provide password");
     }
    
    this.cartService.adminLogin(this.loginUserData).subscribe(
      _data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(['home']);
      }
    );

  }

}
