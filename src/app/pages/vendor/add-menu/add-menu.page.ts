import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {

  Product_name : string = "";
  Product_desc : string = "";
  Product_price : string = "";

  constructor(
    private postPvdr: PostProvider,
    private router: Router
    ) { }

  ngOnInit() {
  }

  createdProses(){
   
    return new Promise(resolve => {

      let body = {

        aksi: 'add',
        Product_name : this.Product_name,
        Product_desc : this.Product_desc,
        Product_price : this.Product_price,
    
      };
      
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.router.navigate(['/menu']);
        console.log('Oks');

      });

    });

  }

}
