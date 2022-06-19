import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniKategorijuPage } from './izmeni-kategoriju.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniKategorijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniKategorijuPageRoutingModule {}
