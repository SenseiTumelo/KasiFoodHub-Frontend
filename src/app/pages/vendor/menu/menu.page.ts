import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostProvider } from '../../../../providers/post-provider';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu : any = [];
  limit: number = 10;
  start: number = 0;

  constructor(
    private router:Router,
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

      this.menu = [];
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
        start:this.start,

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

            for (let menu of data.result) {
              this.menu.push(menu);

            }

          /*this.router.navigate(['/menu']);
          console.log('Okay');*/

            resolve(true);

          });

      });


     }

    }

