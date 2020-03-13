import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage} from './pages/vendor/profile/profile.page';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AddMenuPage} from './pages/vendor/add-menu/add-menu.page';
import { OverviewPage} from './pages/vendor/overview/overview.page';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
   async openProfile(){
     let modal = await this.modalCtrl.create({
       component: ProfilePage,
       cssClass: 'profile'
     });
     modal.present();
   }

  async openAddMenu(){
    let modal = await this.modalCtrl.create({
      component: AddMenuPage,
      cssClass: 'menu'
    });
    modal.present();
  }
  async openOverview(){
    let modal = await this.modalCtrl.create({
      component: OverviewPage,
      cssClass: 'overview'
    });
    modal.present();
  }
}
