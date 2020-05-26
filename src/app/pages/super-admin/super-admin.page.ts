import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {
  segment = 0;
  selectedSlide: any;
  sliderOptions = {
    initialSlide : 0,
    slidesPerView: 1,
    speed: 400
  }

  constructor() { }

  ngOnInit() {
  }

  async segmentChanged(){
    await this.selectedSlide.slideTo(this.segment);

  }

  async slideChanged(slides : IonSlides){
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex =>{
      this.segment = selectedIndex;
    })
  }

}
