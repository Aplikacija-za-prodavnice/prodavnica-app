import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniProizvodMainPageRoutingModule } from './izmeni-proizvod-main-routing.module';

import { IzmeniProizvodMainPage } from './izmeni-proizvod-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniProizvodMainPageRoutingModule
  ],
  declarations: [IzmeniProizvodMainPage]
})
export class IzmeniProizvodMainPageModule {}
