import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
 /* openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }*/
    pages= [

      {
        title:'Home',
        url: '/menu/home',
        icon:'home'
      },
      {
         title: 'Sign Up',
         url: '/mune/singup',
         icon:'login'
      }
    ]

}
