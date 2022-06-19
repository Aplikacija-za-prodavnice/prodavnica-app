import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategorijePageRoutingModule } from './kategorije-routing.module';

import { KategorijePage } from './kategorije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategorijePageRoutingModule
  ],
  declarations: [KategorijePage]
})
export class KategorijePageModule {}
