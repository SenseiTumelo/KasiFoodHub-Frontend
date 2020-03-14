import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './gaurds/auth.guard';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],



  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    CartModalPageModule,
    HttpClientModule
    

  ],
  providers: [
    StatusBar, AuthGuard,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
