import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikaziPersonalizovanuKategorijuPageRoutingModule } from './prikazi-personalizovanu-kategoriju-routing.module';

import { PrikaziPersonalizovanuKategorijuPage } from './prikazi-personalizovanu-kategoriju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikaziPersonalizovanuKategorijuPageRoutingModule
  ],
  declarations: [PrikaziPersonalizovanuKategorijuPage]
})
export class PrikaziPersonalizovanuKategorijuPageModule {}
