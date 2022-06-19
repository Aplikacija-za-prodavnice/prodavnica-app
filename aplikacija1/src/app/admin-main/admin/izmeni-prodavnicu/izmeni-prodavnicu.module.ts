import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniProdavnicuPageRoutingModule } from './izmeni-prodavnicu-routing.module';

import { IzmeniProdavnicuPage } from './izmeni-prodavnicu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniProdavnicuPageRoutingModule
  ],
  declarations: [IzmeniProdavnicuPage]
})
export class IzmeniProdavnicuPageModule {}
