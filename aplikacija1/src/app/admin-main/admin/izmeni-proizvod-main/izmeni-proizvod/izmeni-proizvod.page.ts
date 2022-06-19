import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';
import { IzmeniKategorijeComponent } from './izmeni-kategorije/izmeni-kategorije.component';
import { IzmeniPersonalizovanoComponent } from './izmeni-personalizovano/izmeni-personalizovano.component';
import { IzmeniProdavniceComponent } from './izmeni-prodavnice1/izmeni-prodavnice.component';

@Component({
  selector: 'app-izmeni-proizvod',
  templateUrl: './izmeni-proizvod.page.html',
  styleUrls: ['./izmeni-proizvod.page.scss'],
})
export class IzmeniProizvodPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService, public activatedRoute:ActivatedRoute,private modalCtrl:ModalController) { }
  //@ViewChild("dugme") dugme:any;

  ngAfterViewInit(){
    // console.log(this.dugme);
    // this.dugme.el.addEventListener("click",this.dugmeRadi());
  }
  ngOnInit() {
    this.marketsAndProductsService.proizvodIzmeni=this.marketsAndProductsService.proizvodi[this.activatedRoute.snapshot.paramMap.get('id')];
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
  public sacuvajProizvod(){
    
    this.marketsAndProductsService.IzmeniProizvod(this.marketsAndProductsService.proizvodIzmeni,this.marketsAndProductsService.proizvodIzmeni.key.toString());
  }
}
