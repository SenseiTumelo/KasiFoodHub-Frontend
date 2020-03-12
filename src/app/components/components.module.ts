import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActionsheetComponent } from './actionsheet/actionsheet.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [SlidesComponent, LogoComponent, StartComponent, ActionsheetComponent, SearchbarComponent],
  exports: [SlidesComponent, LogoComponent, StartComponent, ActionsheetComponent, SearchbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
