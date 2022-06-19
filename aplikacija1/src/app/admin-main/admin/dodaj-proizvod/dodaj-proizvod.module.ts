import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DodajProizvodPageRoutingModule } from './dodaj-proizvod-routing.module';

import { DodajProizvodPage } from './dodaj-proizvod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DodajProizvodPageRoutingModule
  ],
  declarations: [DodajProizvodPage]
})
export class DodajProizvodPageModule {}
