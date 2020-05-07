import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

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

}
