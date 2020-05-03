import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { OverviewPageModule} from './pages/vendor/overview/overview.module';
import { ExtrasPageModule } from './pages/extras/extras.module';
import { SidebarComponent } from './sidebar/sidebar.component';

// import { AuthGuard } from './gaurds/auth.guard';

import { ProfilePageModule } from './pages/vendor/profile/profile.module';
import { AddMenuPageModule} from './pages/vendor/add-menu/add-menu.module';
import { AdminauthGuard } from './gaurds/adminauth.guard';
import { AuthenticationService } from './services/authentication.service';
import { ServiceproviderService } from './services/serviceprovider.service';
import { PostProvider } from '../providers/post-provider';
import { HttpModule } from '@angular/http';

// import { Storage } from '@ionic/storage'; error

// import { ActionsheetComponent } from './components/actionsheet/actionsheet.component';




@NgModule({

  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OverviewPageModule,
    CartModalPageModule,
    AddMenuPageModule,
    ExtrasPageModule,
    HttpClientModule,
    ProfilePageModule

  ],
  providers: [
    StatusBar, 
    PostProvider,
    ServiceproviderService,
    SplashScreen, // NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
