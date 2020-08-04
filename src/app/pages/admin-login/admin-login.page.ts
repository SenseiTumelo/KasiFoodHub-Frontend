import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { IonSegment } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  login: any;
  name: string;

  loginUserData = {
    email_address: "",
    password:  ""
  };

  constructor(private http:HttpClient,private alertService: AlertService,private admin: AdminService,private router: Router) { }

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
    
    this.admin.adminLogin(this.loginUserData).subscribe(
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

  checkEmail(){

    this.http.get('http://localhost:4000/admin_login').pipe(
        map(res => res)
    ).subscribe(response => {
        console.log('GET Response:', response);
    });

}
  
}
