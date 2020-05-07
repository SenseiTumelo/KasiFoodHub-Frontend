import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RestaurantService } from 'src/app/services/restaurant.service'
=======
import { AdminService } from 'src/app/services/admin.service';

>>>>>>> 65a981809345503643d8ccaa8382b840011ead1d
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

<<<<<<< HEAD
  rest_profile: any;
  constructor(private resturant: RestaurantService) { }

  ngOnInit() {
    this.resturant.getProfile().subscribe(data => {
      console.log(data)
      this.rest_profile = data.data
    })
=======
  constructor(private adminService : AdminService ) { }
   adminProf: any = '';
  ngOnInit() {
   this.getAdminData();
  }
  getAdminData(){
    return this.adminService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf);})
>>>>>>> 65a981809345503643d8ccaa8382b840011ead1d
  }

}
