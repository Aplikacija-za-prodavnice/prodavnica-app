import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikaziKategorijuPage } from './prikazi-kategoriju.page';

const routes: Routes = [
  {
    path: '',
    component: PrikaziKategorijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikaziKategorijuPageRoutingModule {}
