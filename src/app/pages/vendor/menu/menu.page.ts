import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus: any = [];
  limit = 10; // limit get perdata returned
  start = 0;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

      this.menus = [];
      this.start = 0;
      this.loadMenu();

  }

  addMenu() {

    this.router.navigate(['add-menu']);

  }

  loadMenu() {

    return new Promise(resolve => {

      const body = {

        aksi: 'getdata',
        limit: this.limit,
        start: this.start,

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

            for (const menu of data.result) {
              this.menus.push(menu);

            }

            resolve(true);

          });

      });

    }

  }
