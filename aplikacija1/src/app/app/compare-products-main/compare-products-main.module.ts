import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompareProductsMainPageRoutingModule } from './compare-products-main-routing.module';

import { CompareProductsMainPage } from './compare-products-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompareProductsMainPageRoutingModule
  ],
  declarations: [CompareProductsMainPage]
})
export class CompareProductsMainPageModule {}
