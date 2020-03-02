import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController ,LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
 
   constructor(private route: Router,public actionSheetController: ActionSheetController,private loadingCtrl: LoadingController) {}


   //this a functionof the actionsheet
   async presentActionSheet() {
     const actionSheet = await this.actionSheetController.create({
       header: 'Menu',
       buttons: [{
         text: 'Home',
         role: 'destructive',
         icon: 'home',
         
         handler: () => {
           console.log('Home clicked');
           this.route.navigateByUrl('home');
         }
       }, {
         text: 'Manage Account',
         icon: 'person',
         handler: () => {
           console.log('Share clicked');
           this.route.navigateByUrl('/profile');
         }
       }, {
         text: 'Restaurants',
         icon: 'restaurant',
         handler: () => {
           console.log('Play clicked');
           this.route.navigateByUrl('/restaurants');
         }
       }, {
         text: 'My cart',
         icon: 'cart',
         handler: () => {
           console.log('Favorite clicked');
           this.route.navigateByUrl('/cart-modal');
         }
       },
        {
         text: 'Register as a Vendor',
         icon: 'person',
         handler: () => {
           console.log('Favorite clicked');
           this.route.navigateByUrl('/signupadmin');
         }
       }, 
       {
        text: 'Register as a customer',
        icon: 'person',
        handler: () => {
          console.log('Favorite clicked');
          this.route.navigateByUrl('/signupcust');
        }
      },   {
        text: 'Sign in',
        icon: 'person',
        handler: () => {
          console.log('Favorite clicked');
          this.route.navigateByUrl('/login');
        }
      },{
         text: 'Cancel',
         icon: 'close',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }]
     });
     await actionSheet.present();
   }


   //Loader controller function
  /* presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    \
    
  }*/
  ngOnInit() {
  }
  gotoRest(){
    this.route.navigateByUrl('/restaurants');
  }

}
