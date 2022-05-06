import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompareProductsPageRoutingModule } from './compare-products-routing.module';

import { CompareProductsPage } from './compare-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompareProductsPageRoutingModule
  ],
  declarations: [CompareProductsPage]
})
export class CompareProductsPageModule {}
