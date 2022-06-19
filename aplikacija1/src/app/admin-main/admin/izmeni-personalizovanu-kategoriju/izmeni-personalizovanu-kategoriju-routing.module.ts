import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniPersonalizovanuKategorijuPage } from './izmeni-personalizovanu-kategoriju.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniPersonalizovanuKategorijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniPersonalizovanuKategorijuPageRoutingModule {}
