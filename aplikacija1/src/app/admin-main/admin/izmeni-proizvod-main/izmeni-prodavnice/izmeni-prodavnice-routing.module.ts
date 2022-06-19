import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniProdavnicePage } from './izmeni-prodavnice.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniProdavnicePage
  },
  // {
  //   path:'/admin/izmeni:id',
  //   loadChildren:()=>import('./../izmeni-proizvod/izmeni-proizvod.module').then(m=>m.IzmeniProizvodPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniProdavnicePageRoutingModule {}
