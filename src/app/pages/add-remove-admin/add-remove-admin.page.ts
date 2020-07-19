import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-remove-admin',
  templateUrl: './add-remove-admin.page.html',
  styleUrls: ['./add-remove-admin.page.scss'],
})
export class AddRemoveAdminPage implements OnInit {

  constructor(private router: Router,private location:Location) { }

  ngOnInit() {
  }
  addAdmin(){
    this.router.navigateByUrl('/super-admin');
  }

   // back button
 backButton() {
  this.location.back();
 }

}
