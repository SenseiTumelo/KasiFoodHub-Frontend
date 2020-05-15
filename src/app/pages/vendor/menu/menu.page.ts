import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostProvider } from '../../../../providers/post-provider';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus : any = [];
  limit: number = 10; //limit get perdata returned
  start: number = 0;

  constructor(
    private router:Router,
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

      this.menus = [];
      this.start = 0;
      this.loadMenu();

  }

  addMenu(){

    this.router.navigate(['add-menu']);

  }

  loadMenu(){

    return new Promise(resolve => {

      let body = {

        aksi: 'getdata',
        limit: this.limit,
        start: this.start,

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

            for (let menu of data.result) {
              this.menus.push(menu);

            }

          /*this.router.navigate(['/menu']);*/
           console.log('Okay');

            resolve(true);

          });

      });

    }

  }
