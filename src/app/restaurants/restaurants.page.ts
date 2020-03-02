import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private route: Router, private restService: RestaurantService) { }
   rest: any = [];
  ngOnInit() {
    
  }
 order(){
   this.route.navigateByUrl('/order2');
 }
 secOrder(){
   this.route.navigateByUrl('/order');
 }
 thirdOrder(){
   this.route.navigateByUrl('/order3');
 }

}
