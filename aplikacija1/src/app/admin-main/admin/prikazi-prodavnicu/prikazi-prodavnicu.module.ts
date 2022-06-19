import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikaziProdavnicuPageRoutingModule } from './prikazi-prodavnicu-routing.module';

import { PrikaziProdavnicuPage } from './prikazi-prodavnicu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikaziProdavnicuPageRoutingModule
  ],
  declarations: [PrikaziProdavnicuPage]
})
export class PrikaziProdavnicuPageModule {}
