import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniProizvodPageRoutingModule } from './izmeni-proizvod-routing.module';

import { IzmeniProizvodPage } from './izmeni-proizvod.page';
import { IzmeniProdavniceComponent } from './izmeni-prodavnice1/izmeni-prodavnice.component';
import { IzmeniKategorijeComponent } from './izmeni-kategorije/izmeni-kategorije.component';
import { IzmeniPersonalizovanoComponent } from './izmeni-personalizovano/izmeni-personalizovano.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniProizvodPageRoutingModule
  ],
  declarations: [IzmeniProizvodPage,IzmeniProdavniceComponent,IzmeniKategorijeComponent,IzmeniPersonalizovanoComponent],
  entryComponents:[IzmeniProdavniceComponent,IzmeniKategorijeComponent,IzmeniPersonalizovanoComponent]
})
export class IzmeniProizvodPageModule {}
