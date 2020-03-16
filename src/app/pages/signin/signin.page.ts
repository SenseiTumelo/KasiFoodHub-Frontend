import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private location: Location, private data: DataService, private route: Router) { }

  ngOnInit() {
  }
 back(){
   this.location.back();
 }
 num: Number = 0 ;

 clicked(){
 return this.data.loggedIn(1);
 }

 gotoProfile(){
   this.route.navigateByUrl('/custprof');
 }

}
