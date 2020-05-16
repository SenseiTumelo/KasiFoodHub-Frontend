import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {

  item_name: string ="";
  item_description: string ="";
  item_price: string ="";

  constructor(
    private router: Router,
    private postPvdr: PostProvider
    ) { }

  ngOnInit() {

  }

  createdProses(){
    return new Promise(resolve => {

      let body = {

        aksi: 'add',
        item_name : this.item_name,
        item_description : this.item_description,
        item_price: this.item_price, 
       
      };
      
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.router.navigate(['/menu']);
        console.log('submit works');

      });

    });

  }

}
