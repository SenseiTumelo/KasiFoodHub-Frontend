import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-remove-add-admin',
  templateUrl: './remove-add-admin.page.html',
  styleUrls: ['./remove-add-admin.page.scss'],
})
export class RemoveAddAdminPage implements OnInit {

  adminRemove=[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.adminRemove = this.cartService.getAdminRemove();

    
  }

  /*removeAdmin(){
    this.cartService.removeAdmin(this.admin.id);
    
  }*/

}
