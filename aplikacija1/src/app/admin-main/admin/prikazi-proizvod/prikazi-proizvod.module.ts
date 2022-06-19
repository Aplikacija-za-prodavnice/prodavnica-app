import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikaziProizvodPageRoutingModule } from './prikazi-proizvod-routing.module';

import { PrikaziProizvodPage } from './prikazi-proizvod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikaziProizvodPageRoutingModule
  ],
  declarations: [PrikaziProizvodPage]
})
export class PrikaziProizvodPageModule {}
