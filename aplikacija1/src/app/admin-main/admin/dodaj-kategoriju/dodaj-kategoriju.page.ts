import { Component, OnInit } from '@angular/core';
import { Kategorija } from 'src/app/klase/Kategorija/Kategorija';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-dodaj-kategoriju',
  templateUrl: './dodaj-kategoriju.page.html',
  styleUrls: ['./dodaj-kategoriju.page.scss'],
})
export class DodajKategorijuPage implements OnInit {

  constructor(public marketsAnProductsService:MarketsAndProductsService) { }

  ngOnInit() {
    this.marketsAnProductsService.kategorijaIzmeni=new Kategorija("",this.marketsAnProductsService.vratiIdZaKategoriju(),"",[]);
  }
  public dodajKategoriju(){
    this.marketsAnProductsService.dodajKatgoriju(this.marketsAnProductsService.kategorijaIzmeni);
  }

}
