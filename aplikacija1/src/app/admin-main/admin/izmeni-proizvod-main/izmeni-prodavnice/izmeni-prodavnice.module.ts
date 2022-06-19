import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniProdavnicePageRoutingModule } from './izmeni-prodavnice-routing.module';

import { IzmeniProdavnicePage } from './izmeni-prodavnice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniProdavnicePageRoutingModule
  ],
  declarations: [IzmeniProdavnicePage]
})
export class IzmeniProdavnicePageModule {}
