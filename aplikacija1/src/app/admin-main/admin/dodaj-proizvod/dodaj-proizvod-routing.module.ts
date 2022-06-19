import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DodajProizvodPage } from './dodaj-proizvod.page';

const routes: Routes = [
  {
    path: '',
    component: DodajProizvodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DodajProizvodPageRoutingModule {}
