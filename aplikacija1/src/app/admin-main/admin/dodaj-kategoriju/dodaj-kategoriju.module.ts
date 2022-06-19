import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DodajKategorijuPageRoutingModule } from './dodaj-kategoriju-routing.module';

import { DodajKategorijuPage } from './dodaj-kategoriju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DodajKategorijuPageRoutingModule
  ],
  declarations: [DodajKategorijuPage]
})
export class DodajKategorijuPageModule {}
