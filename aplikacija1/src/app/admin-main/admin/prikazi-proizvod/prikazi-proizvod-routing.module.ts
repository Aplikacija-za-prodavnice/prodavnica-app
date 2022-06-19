import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikaziProizvodPage } from './prikazi-proizvod.page';

const routes: Routes = [
  {
    path: '',
    component: PrikaziProizvodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikaziProizvodPageRoutingModule {}
