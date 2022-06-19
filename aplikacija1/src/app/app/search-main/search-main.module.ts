import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMainPageRoutingModule } from './search-main-routing.module';

import { SearchMainPage } from './search-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMainPageRoutingModule
  ],
  declarations: [SearchMainPage]
})
export class SearchMainPageModule {}
