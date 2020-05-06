import { Component, OnInit } from '@angular/core';
import {PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {

  product_name : string = "";
  product_desc : string = "";
  product_price : string = "";

  constructor(
    private postPvdr: PostProvider,
    private router: Router
    ) { }

  ngOnInit() {
  }

  createdProses(){
    console.log('Oks');

    return new Promise(resolve => {

      let body = {

        aksi: 'add',
        product_name : this.product_name,
        product_desc : this.product_desc,
        product_price : this.product_price,
    
      };
      
      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.router.navigate(['/menu']);

      });

    });

  }

}
