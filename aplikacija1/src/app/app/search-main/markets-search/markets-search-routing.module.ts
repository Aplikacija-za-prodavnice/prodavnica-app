import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketsSearchPage } from './markets-search.page';

const routes: Routes = [
  {
    path: '',
    component: MarketsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketsSearchPageRoutingModule {}
