import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikaziKategorijuPageRoutingModule } from './prikazi-kategoriju-routing.module';

import { PrikaziKategorijuPage } from './prikazi-kategoriju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikaziKategorijuPageRoutingModule
  ],
  declarations: [PrikaziKategorijuPage]
})
export class PrikaziKategorijuPageModule {}
