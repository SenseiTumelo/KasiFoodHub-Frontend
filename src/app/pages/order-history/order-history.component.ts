import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {

  employees:Employee[]=[
    {
      id:1,
      name:'Mark',
      shopName:'Shisa Nyama',
      phoneNumber:'0139266862',
      orderingData:new Date('10/25/1988'),
      address:'2427 Block L',
      Price:'R49.99',
      photoPath:'assets/images/food1.png'
    },
    {
      id:2,
      name:'Mary',
      shopName:'KFC',
      phoneNumber:'0129284862',
      orderingData:new Date('11/05/1978'),
      address:'024 Block H',
      Price:'R79.50',
      photoPath:'assets/images/food2.jpg'
    },
    {
      id:2,
      name:'john',
      shopName:'wimpy',
      phoneNumber:'0129284862',
      orderingData:new Date('11/05/1978'),
      address:'014 Block vv',
      Price:'R79.50',
      photoPath:'assets/images/food2.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
