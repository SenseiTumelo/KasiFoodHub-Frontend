import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  rest_profile: any;
  constructor(private resturant: RestaurantService) { }

  ngOnInit() {
    this.resturant.getProfile().subscribe(data => {
      console.log(data)
      this.rest_profile = data.data
    })
  }

}
