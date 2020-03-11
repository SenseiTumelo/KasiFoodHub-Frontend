import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HttpErrorResponse }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';

import { ExtrasPageModule } from './pages/extras/extras.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { ActionsheetComponent } from './components/actionsheet/actionsheet.component';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],



  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    CartModalPageModule,

    ExtrasPageModule,
    HttpClientModule



  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
