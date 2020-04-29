import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {

  Prod_name : string = "";
  Prod_desc : string = "";
  Prod_price : number;

  constructor() { }

  ngOnInit() {
  }
  createdProses(){

    console.log("Ok");
  }

}
