import { Component, OnInit } from '@angular/core';
import { Prodavnica } from 'src/app/klase/Prodavnica/prodavnica';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-dodaj-prodavnicu',
  templateUrl: './dodaj-prodavnicu.page.html',
  styleUrls: ['./dodaj-prodavnicu.page.scss'],
})
export class DodajProdavnicuPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }
  public prodavnica:Prodavnica=new Prodavnica("",this.marketsAndProductsService.vratiIdProdavnice(),"","","");
  ngOnInit() {
  }
  public dodajProdavnicu(){
    this.marketsAndProductsService.dodajProdavnicuUBazu(this.prodavnica);
  }
}
