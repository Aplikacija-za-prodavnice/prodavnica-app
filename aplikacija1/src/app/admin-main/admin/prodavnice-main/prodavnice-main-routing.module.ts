import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdavniceMainPage } from './prodavnice-main.page';

const routes: Routes = [
  {
    path: '',
    component: ProdavniceMainPage,
    children:[
      {
        path:'',
        loadChildren:()=>import("./prodavnice/prodavnice.module").then(m=>m.ProdavnicePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdavniceMainPageRoutingModule {}
