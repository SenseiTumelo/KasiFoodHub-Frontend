import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {Router} from '@angular/router';
import {ActionSheetController} from '@ionic/angular';

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
  };

  constructor(private router:Router,public menuController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentMenuController() {
    const actionSheet = await this.menuController.create({
      header: 'Menu',
      buttons: [{
        text: 'Add Admin',
        role: 'destructive',
        icon: 'person-add-outline',
        handler: () => {
          console.log('addAdmin clicked');
          this.router.navigateByUrl('/remove-add-admin');
        }
      }/*,{
        text: 'Remove Admin',
        icon: 'person-add-outline',
        handler: () => {
          console.log('removeAdmin clicked');
          this.router.navigateByUrl('/remove-add-admin');
        }
      }*/]


    });
    await actionSheet.present();
  }

  async segmentChanged() {
    await this.selectedSlide.slideTo(this.segment);

  }

  async slideChanged(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    });
  }

}
