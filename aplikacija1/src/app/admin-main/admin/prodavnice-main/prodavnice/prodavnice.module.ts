import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdavnicePageRoutingModule } from './prodavnice-routing.module';

import { ProdavnicePage } from './prodavnice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdavnicePageRoutingModule
  ],
  declarations: [ProdavnicePage]
})
export class ProdavnicePageModule {}
