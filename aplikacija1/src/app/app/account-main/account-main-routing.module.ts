import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountMainPage } from './account-main.page';

const routes: Routes = [
  {
    path: '',
    component: AccountMainPage,
    children:[
      {
        path: 'shopping-cart',
        loadChildren: ()=>import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
      },
      {
        path: '',
        loadChildren: ()=>import('./account/account.module').then( m => m.AccountPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountMainPageRoutingModule {}
