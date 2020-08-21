import { Component, OnInit } from '@angular/core';

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

  userID: any;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  loginuser: any;
  users: any

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

  email: string;
  password: string

  checkEmail(){

    let data = {
      email: this.email,
      password: this.password
    };

    this.http.get('http://localhost:4000/admin_login'+data).pipe(
        map(res => res)
    ).subscribe(response => {
        console.log('GET Response:', response);
    });

}

valid(){
  this.http.get('http://localhost:4000/admin_login').pipe(
    map(res => res)
  ).subscribe(response => {
    if(response["errorCode"] != 0){
      this.loginuser = response;
      this.users = this.loginuser
      console.log(this.loginuser);
      this.error = false;
      this.errorMessage ="";
      this.alertService.presentToast(false);

      if(this.userID == 1){
        this.router.navigate(['/order3'])
        console.log('Get response: ', response);
      }
    }
  });
}
  
}
