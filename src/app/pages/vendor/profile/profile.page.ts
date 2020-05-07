import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service'; //here is that class

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private aService : AdminService ) { } // aService is an object of AdminService
   adminProf: any = ''; // this variable will store all the data we get from the database ***
  ngOnInit() {
   this.getAdminData();
  }
  getAdminData(){
    return this.aService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf);});
  }// from subscribe((data..........)) its just the same code, you only have to change this.[[the variable name***]]
//then you are done here
}
