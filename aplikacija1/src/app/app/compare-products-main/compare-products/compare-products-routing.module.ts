import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareProductsPage } from './compare-products.page';

const routes: Routes = [
  {
    path: '',
    component: CompareProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompareProductsPageRoutingModule {}
