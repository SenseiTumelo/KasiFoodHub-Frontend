import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service'
import { AdminService } from 'src/app/services/admin.service'; // here is that class

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  rest_profile: any;

  ngOnInit() {
    this.resturant.getProfile().subscribe(data => {
      console.log(data)
      this.rest_profile = data.data
      this.getAdminData();
    })
    
  constructor(private resturant: RestaurantService, private adminService: AdminService ) { }
   adminProf: any = '';
    
  getAdminData(){
    return this.adminService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf); });
  }

}
