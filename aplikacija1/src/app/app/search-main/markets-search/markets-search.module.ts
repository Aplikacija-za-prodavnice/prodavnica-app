import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketsSearchPageRoutingModule } from './markets-search-routing.module';

import { MarketsSearchPage } from './markets-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketsSearchPageRoutingModule,
  ],
  declarations: [MarketsSearchPage]
})
export class MarketsSearchPageModule {}
