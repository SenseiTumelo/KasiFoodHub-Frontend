import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-singupcust',
  templateUrl: './singupcust.page.html',
  styleUrls: ['./singupcust.page.scss'],
})
export class SingupcustPage implements OnInit {

  // userData = {"name":"", "surname":"", "email":"","password":"", "cpassword":"", "cell_no":""};//reg
  // tslint:disable-next-line: max-line-length
  userData = {
    name: '',
    surname: '',
    address: '',
    email_address: '',
    cell_no: '',
    password: ''
 
    // published: false
  };
  constructor(private route: Router, private location: Location, private toastController: ToastController,
               private serv: ServiceproviderService, private dataService: DataService) { }

  ngOnInit() {
  }
  register(){
    const data = {
      name: this.userData.name,
      surname: this.userData.surname,
      address: this.userData.address,
      email_address: this.userData.email_address,
      cell_no: this.userData.cell_no,
      password: this.userData.password
    }
     this.dataService.registerCust(data).subscribe(response => {console.log(response); } , error => console.log(error));
    };
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
