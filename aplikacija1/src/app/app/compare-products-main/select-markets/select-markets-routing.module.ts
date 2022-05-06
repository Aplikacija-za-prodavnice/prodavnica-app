import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMarketsPage } from './select-markets.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMarketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMarketsPageRoutingModule {}
