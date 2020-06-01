import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus : any = [];
  limit: number = 50; //limit get perdata returned
  start: number = 0;

  constructor(
    private router:Router,
    private postPvdr: PostProvider,
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

  deleteMenu(id){
 
      let body = {

        aksi: 'delete',
        item_id: id

      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {

        this.ionViewWillEnter();

      });
 
  }
  
  updateMenu(id,name,price,description){

    this.router.navigate(['add-menu/' + id  + '/' + name + '/' + price + '/' + description]);

  }

showMenu(id,name,price,description){

    this.router.navigate(['show-menu/' + id  + '/' + name + '/' + price + '/' + description]);

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

            resolve(true);

          });

      });

    }

  }
