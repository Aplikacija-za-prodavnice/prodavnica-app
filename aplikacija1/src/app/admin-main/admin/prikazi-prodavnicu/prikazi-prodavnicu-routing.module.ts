import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikaziProdavnicuPage } from './prikazi-prodavnicu.page';

const routes: Routes = [
  {
    path: '',
    component: PrikaziProdavnicuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikaziProdavnicuPageRoutingModule {}
