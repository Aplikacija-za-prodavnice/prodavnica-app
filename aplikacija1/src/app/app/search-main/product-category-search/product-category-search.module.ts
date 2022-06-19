import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategorySearchPageRoutingModule } from './product-category-search-routing.module';

import { ProductCategorySearchPage } from './product-category-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCategorySearchPageRoutingModule
  ],
  declarations: [ProductCategorySearchPage]
})
export class ProductCategorySearchPageModule {}
