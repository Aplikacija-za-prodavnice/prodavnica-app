import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdavnicePage } from './prodavnice.page';

const routes: Routes = [
  {
    path: '',
    component: ProdavnicePage
  },
  {
    path:'/admin/prodavnica/:pr',
    loadChildren:()=>import("../../prikazi-prodavnicu/prikazi-prodavnicu.module").then(m=>m.PrikaziProdavnicuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdavnicePageRoutingModule {}
