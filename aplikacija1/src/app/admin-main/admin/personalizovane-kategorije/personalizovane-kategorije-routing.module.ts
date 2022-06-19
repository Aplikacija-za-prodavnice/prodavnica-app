import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizovaneKategorijePage } from './personalizovane-kategorije.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizovaneKategorijePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizovaneKategorijePageRoutingModule {}
