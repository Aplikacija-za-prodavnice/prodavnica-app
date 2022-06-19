import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DodajPersonalizovanukategorijuPageRoutingModule } from './dodaj-personalizovanukategoriju-routing.module';

import { DodajPersonalizovanukategorijuPage } from './dodaj-personalizovanukategoriju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DodajPersonalizovanukategorijuPageRoutingModule
  ],
  declarations: [DodajPersonalizovanukategorijuPage]
})
export class DodajPersonalizovanukategorijuPageModule {}
