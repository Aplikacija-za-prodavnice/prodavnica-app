import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizovaneKategorijePageRoutingModule } from './personalizovane-kategorije-routing.module';

import { PersonalizovaneKategorijePage } from './personalizovane-kategorije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizovaneKategorijePageRoutingModule
  ],
  declarations: [PersonalizovaneKategorijePage]
})
export class PersonalizovaneKategorijePageModule {}
