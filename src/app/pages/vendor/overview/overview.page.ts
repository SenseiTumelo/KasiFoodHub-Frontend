import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RestaurantService } from 'src/app/services/restaurant.service'
=======
import { AdminService } from 'src/app/services/admin.service';
>>>>>>> 65a981809345503643d8ccaa8382b840011ead1d

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

<<<<<<< HEAD
  orderList: any;
  menuList:any;
  constructor(private resturant: RestaurantService) { }

  ngOnInit() {
    this.resturant.getOrders().subscribe( data => {
      console.log(data);
      this.orderList = data.data;
    })
    this.resturant.getItems().subscribe(data => {
      console.log(data);
      this.menuList = data.data;
      console.log(this.menuList);
    });
  }
=======
  constructor(private adminService : AdminService ) { }
  adminProf: any = '';
 ngOnInit() {
  this.getAdminData();
 }
 getAdminData(){
   return this.adminService.getProfile().subscribe((data: any) => {this.adminProf = data; console.log(this.adminProf);})
 }
>>>>>>> 65a981809345503643d8ccaa8382b840011ead1d

}
