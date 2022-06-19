import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikaziPersonalizovanuKategorijuPage } from './prikazi-personalizovanu-kategoriju.page';

const routes: Routes = [
  {
    path: '',
    component: PrikaziPersonalizovanuKategorijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikaziPersonalizovanuKategorijuPageRoutingModule {}
