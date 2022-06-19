import { Input, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage,
    children:[
      {
        path: '',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
      },
      {
        path:'uporedjivanje-proizvoda',
        loadChildren:()=>import('./compare-products-main/compare-products-main.module').then(m=>m.CompareProductsMainPageModule)
      },
      {
        path: 'product-details',
        loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
      },
      {
        path:'account',
        loadChildren:()=>import('./account-main/account-main.module').then(m=>m.AccountMainPageModule)
      },
      // {
      //   path: 'pretrazivanje',
      //   loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      // },
      {
        path: 'podrska',
        loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
      },
      {
        path:'detaljnije-o-proizvodu',
        loadChildren: ()=>import('./product-details/product-details.module').then(m=>m.ProductDetailsPageModule)
      },
      {
        path: 'pretrazivanje',
        loadChildren: () => import('./search-main/search-main.module').then( m => m.SearchMainPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}
