import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../Providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {

  Prod_name : string = "";
  Prod_desc : string = "";
  Prod_price : number;

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
          Prod_name : this.Prod_name,
          Prod_desc : this.Prod_desc,
          Prod_price : this.Prod_price,

        };

        this.postPvdr.postData(body, 'proses-api.php').subcribe(data => {

            this.router.navigate(['/menu']);
            console.log('Okay');

        });

    });

  }

}
