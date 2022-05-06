import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMarketsPageRoutingModule } from './select-markets-routing.module';

import { SelectMarketsPage } from './select-markets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMarketsPageRoutingModule
  ],
  declarations: [SelectMarketsPage]
})
export class SelectMarketsPageModule {}
