import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DodajKategorijuPage } from './dodaj-kategoriju.page';

const routes: Routes = [
  {
    path: '',
    component: DodajKategorijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DodajKategorijuPageRoutingModule {}
