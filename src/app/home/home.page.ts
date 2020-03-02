import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
 
   constructor(private route: Router,public actionSheetController: ActionSheetController) {}

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
           this.route.navigateByUrl('/order');
         }
       },
        {
         text: 'Sign in',
         icon: 'heart',
         handler: () => {
           console.log('Favorite clicked');
           this.route.navigateByUrl('/login');
         }
       }, {
         text: 'Cancel',
         icon: 'close',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
           this.route.navigateByUrl('home');
         }
       }]
     });
     await actionSheet.present();
   }
  ngOnInit() {
  }
  gotoRest(){
    this.route.navigateByUrl('/restaurants');
  }

}
