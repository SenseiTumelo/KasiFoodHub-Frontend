import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  constructor(private route: Router, private location: Location, private toastController: ToastController, private serv: ServiceproviderService) { }

  ngOnInit() {
  }

 /* registerEnter() {

    // tslint:disable-next-line: max-line-length
    this.serv.registerData(this.userData.name,
    this.userData.surname, this.userData.email, this.userData.password, this.userData.cpassword, this.userData.cell_no);


  }*/


 /* goHome()
 {
   this.route.navigateByUrl('/home');
 }
 btnClear(){
 } */


 // back button
 backButton() {
  this.location.back();
 }




}
