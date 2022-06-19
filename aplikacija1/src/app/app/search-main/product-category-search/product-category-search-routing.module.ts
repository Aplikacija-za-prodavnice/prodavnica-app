import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategorySearchPage } from './product-category-search.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategorySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategorySearchPageRoutingModule {}
