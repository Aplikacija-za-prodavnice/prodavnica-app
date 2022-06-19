import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DodajProdavnicuPageRoutingModule } from './dodaj-prodavnicu-routing.module';

import { DodajProdavnicuPage } from './dodaj-prodavnicu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DodajProdavnicuPageRoutingModule
  ],
  declarations: [DodajProdavnicuPage]
})
export class DodajProdavnicuPageModule {}
