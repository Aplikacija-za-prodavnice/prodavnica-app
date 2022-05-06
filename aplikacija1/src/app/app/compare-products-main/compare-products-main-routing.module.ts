import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareProductsMainPage } from './compare-products-main.page';

const routes: Routes = [
  {
    path: '',
    component: CompareProductsMainPage,
    children:[
      {
        path:'',
        loadChildren:()=>import('./compare-products/compare-products.module').then(m=>m.CompareProductsPageModule)
      },
      {
        path:'selekcija-proizvoda',
        loadChildren:()=>import('./select-products/select-products.module').then(m=>m.SelectProductsPageModule)
      },
      {
        path: 'selekcija-prodavnica',
        loadChildren: () => import('./select-markets/select-markets.module').then( m => m.SelectMarketsPageModule)
      },
      {
        path:'detaljnije-o-proizvodu',
        loadChildren: ()=> import('./../product-details/product-details.module').then(m=>m.ProductDetailsPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompareProductsMainPageRoutingModule {}
