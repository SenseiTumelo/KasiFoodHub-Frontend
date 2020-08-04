import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Location } from '@angular/common';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  product = [];
  
  isDisplay = true;
  toggleDisplay(){
    this.isDisplay = true;
  }
  toggleDisplayNot(){
    this.isDisplay = false;
  }

  data: any;

  constructor(private alertService: AlertService, public http:HttpClient, private route:ActivatedRoute, 
    private router: Router, private formBuilder: FormBuilder/**/,
    private location: Location,public platform:Platform,private cartService: CartService) {

      //
      // this.platform.ready().then(() =>{
      //   this.order();
      // });

      this.route.queryParams.subscribe(params => {
        console.log('Params: ',params)
        if(params && params.special){
          this.data = params.special;
        }
        if(this.router.getCurrentNavigation().extras.state){
          this.data = this.router.getCurrentNavigation().extras.state.user;
        }
      });
   
   }
   

  ngOnInit() {
    this.product = this.cartService.getCheckout();
  }

  order(){
    // var dataToSend = {
    //   oder_id:2,fk_Customer_ID:258741,quantity:10,totalAmount:78,order_Status:0
    // };
    // var url ="http://localhost:4000/";
    // this.http.post(url,{data:JSON.stringify(dataToSend)},{headers:new HttpHeaders(
    //   {"content-Type":"application/json"}
    // )}).subscribe(
    //   (data)=>{
    //     alert(data);
    //   }
    // )

    // document.getElementById("name").innerHTML="Order SUCCESSFUL";
     
    
      this.alertService.presentToast("You have successfully placed your order.");
    (<HTMLInputElement> document.getElementById("submit")).disabled = true;
  }

  home(){
    this.router.navigate(['home']);
  }
//back button
back(){
  this.location.back();
}
}
/*get house(){
    return this.addressForm.get('house');
  }
  get street(){
    return this.addressForm.get('street');
  }
  get city(){
    return this.addressForm.get('city');
  }
  get town(){
    return this.addressForm.get('town');
  }
  get zip(){
    return this.addressForm.get('zip');
  }

  public errorMessages = {
    house: [
      {type: 'required',message: 'House number is required'},
      {type: 'maxlength', message: 'House number cant be longer than 10 characters'}
    ],
    street: [
      {type: 'required',message: 'Street Address is required'},
      {type: 'maxlength', message: 'Street Address cant be longer than 100 characters'}
    ],
    city: [
      {type: 'required',message: 'City is required'},
      {type: 'maxlength', message: 'City cant be longer than 100 characters'}
    ],
    town: [
      {type: 'required',message: 'Town is required'},
      {type: 'maxlength', message: 'Town cant be longer than 100 characters'}
    ],
    zip: [
      {type: 'pattern',message: 'Please enter a valid zip code'},
     ],
  }
  
  addressForm = this.formBuilder.group({
    house: ['',[Validators.required, Validators.maxLength(10)]],
    street: ['',[Validators.required, Validators.maxLength(100)]],
    city: ['',[Validators.required, Validators.maxLength(100)]],
    town: ['',[Validators.required, Validators.maxLength(100)]],
    zip: ['',,[Validators.required, Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$")]]
  });
*/