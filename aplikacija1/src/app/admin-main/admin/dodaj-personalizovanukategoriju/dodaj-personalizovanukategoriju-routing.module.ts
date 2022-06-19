import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DodajPersonalizovanukategorijuPage } from './dodaj-personalizovanukategoriju.page';

const routes: Routes = [
  {
    path: '',
    component: DodajPersonalizovanukategorijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DodajPersonalizovanukategorijuPageRoutingModule {}
