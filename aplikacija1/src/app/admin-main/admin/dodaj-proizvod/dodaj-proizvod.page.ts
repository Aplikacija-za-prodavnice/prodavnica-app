import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';
import { IzmeniKategorijeComponent } from '../izmeni-proizvod-main/izmeni-proizvod/izmeni-kategorije/izmeni-kategorije.component';
import { IzmeniPersonalizovanoComponent } from '../izmeni-proizvod-main/izmeni-proizvod/izmeni-personalizovano/izmeni-personalizovano.component';
import { IzmeniProdavniceComponent } from '../izmeni-proizvod-main/izmeni-proizvod/izmeni-prodavnice1/izmeni-prodavnice.component';

@Component({
  selector: 'app-dodaj-proizvod',
  templateUrl: './dodaj-proizvod.page.html',
  styleUrls: ['./dodaj-proizvod.page.scss'],
})
export class DodajProizvodPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService,private modalCtrl:ModalController) {

   }
  ngOnInit() {
    this.marketsAndProductsService.proizvodIzmeni=new Proizvod("","",[],[],undefined,[],"","")
  }

  public openModal(){
    this.modalCtrl.create({
      component:IzmeniProdavniceComponent
    }).then((modal:HTMLIonModalElement)=>{
      modal.present();
    });
  }
  public otvoriKategorije(){
    this.modalCtrl.create({
      component:IzmeniKategorijeComponent
    }).then((modal:HTMLIonModalElement)=>{
      modal.present();
    });
  }
  public otvoriPersonalizovano(){
    this.modalCtrl.create({
      component:IzmeniPersonalizovanoComponent
    }).then((modal:HTMLIonModalElement)=>{
      modal.present();
    });
  }
  public dodajProizvod(){
    this.marketsAndProductsService.dodajProizvod(this.marketsAndProductsService.proizvodIzmeni);
  }
}
