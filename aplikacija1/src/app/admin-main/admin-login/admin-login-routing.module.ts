import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPage } from './admin-login.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginPage
  },
  {
    path:'/login',
    loadChildren:()=>import("src/app/app.module").then(m=>m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLoginPageRoutingModule {}
