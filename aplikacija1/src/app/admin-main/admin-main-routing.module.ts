import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMainPage } from './admin-main.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMainPage,
    children:[
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMainPageRoutingModule {}
