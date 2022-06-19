import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniProdavnicuPage } from './izmeni-prodavnicu.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniProdavnicuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniProdavnicuPageRoutingModule {}
