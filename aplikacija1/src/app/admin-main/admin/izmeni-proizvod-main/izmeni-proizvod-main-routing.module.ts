import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniProizvodMainPage } from './izmeni-proizvod-main.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniProizvodMainPage,
    children:[
      {
        path:'',
        loadChildren:()=>import("./izmeni-proizvod/izmeni-proizvod.module").then(m=>m.IzmeniProizvodPageModule)
      },
      {
        path:'prodavnice',
        loadChildren:()=>import("./izmeni-prodavnice/izmeni-prodavnice.module").then(m=>m.IzmeniProdavnicePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniProizvodMainPageRoutingModule {}
