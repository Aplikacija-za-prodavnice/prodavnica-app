import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniPersonalizovanuKategorijuPageRoutingModule } from './izmeni-personalizovanu-kategoriju-routing.module';

import { IzmeniPersonalizovanuKategorijuPage } from './izmeni-personalizovanu-kategoriju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniPersonalizovanuKategorijuPageRoutingModule
  ],
  declarations: [IzmeniPersonalizovanuKategorijuPage]
})
export class IzmeniPersonalizovanuKategorijuPageModule {}
