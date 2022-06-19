import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategorijePage } from './kategorije.page';

const routes: Routes = [
  {
    path: '',
    component: KategorijePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategorijePageRoutingModule {}
