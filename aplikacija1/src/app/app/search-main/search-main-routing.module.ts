import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPage } from './search/search.page';

import { SearchMainPage } from './search-main.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMainPage,
    children:[
      {
        path:'odabir-prodavnica',
        loadChildren:()=>import('./markets-search/markets-search.module').then(m=>m.MarketsSearchPageModule)
      },
      {
        path:'',
        loadChildren:()=>import('./search/search.module').then(m=>m.SearchPageModule)
      },
      {
        path: 'odabir-kategorije-proizvoda',
        loadChildren: () => import('./product-category-search/product-category-search.module').then( m => m.ProductCategorySearchPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMainPageRoutingModule {}
