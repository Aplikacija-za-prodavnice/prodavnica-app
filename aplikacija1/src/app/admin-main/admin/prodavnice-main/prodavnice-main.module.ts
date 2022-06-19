import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdavniceMainPageRoutingModule } from './prodavnice-main-routing.module';

import { ProdavniceMainPage } from './prodavnice-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdavniceMainPageRoutingModule
  ],
  declarations: [ProdavniceMainPage]
})
export class ProdavniceMainPageModule {}
