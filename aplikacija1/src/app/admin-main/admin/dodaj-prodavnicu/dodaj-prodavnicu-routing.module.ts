import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DodajProdavnicuPage } from './dodaj-prodavnicu.page';

const routes: Routes = [
  {
    path: '',
    component: DodajProdavnicuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DodajProdavnicuPageRoutingModule {}
