import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniKategorijuPageRoutingModule } from './izmeni-kategoriju-routing.module';

import { IzmeniKategorijuPage } from './izmeni-kategoriju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniKategorijuPageRoutingModule
  ],
  declarations: [IzmeniKategorijuPage]
})
export class IzmeniKategorijuPageModule {}
