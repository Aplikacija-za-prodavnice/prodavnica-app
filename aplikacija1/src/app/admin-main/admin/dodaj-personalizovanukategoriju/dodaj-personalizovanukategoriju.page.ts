import { Component, OnInit } from '@angular/core';
import PersonalizovanaKategorija from 'src/app/klase/Personalizovano/Personalizovano';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-dodaj-personalizovanukategoriju',
  templateUrl: './dodaj-personalizovanukategoriju.page.html',
  styleUrls: ['./dodaj-personalizovanukategoriju.page.scss'],
})
export class DodajPersonalizovanukategorijuPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
    this.marketsAndProductsService.personalizovanaKategorijaIzmeni=new PersonalizovanaKategorija("",this.marketsAndProductsService.vratiIdZaPersonalizovanuKategoriju(),"",[]);
  }

  public dodajPersonalizovano(){
    this.marketsAndProductsService.dodajPersonalizovanuKategoriju(this.marketsAndProductsService.personalizovanaKategorijaIzmeni);
  }
}
