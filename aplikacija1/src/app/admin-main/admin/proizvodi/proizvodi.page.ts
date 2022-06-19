import { Component, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.page.html',
  styleUrls: ['./proizvodi.page.scss'],
})
export class ProizvodiPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }
  public obrisiProizvod(proizvod:Proizvod){
    this.marketsAndProductsService.obrisiProizvod(proizvod);
  }

}
