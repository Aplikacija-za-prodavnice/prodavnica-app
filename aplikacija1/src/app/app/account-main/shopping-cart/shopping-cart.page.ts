import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }
  ngDoCheck(): void {
    let novaUkupnaCena:number=0.0;
    this.marketsAndProductsService.korpa.forEach(product => {
      novaUkupnaCena+=product.proizvod.cena*product.cena;
    });
    if(this.ukupnaCena!==novaUkupnaCena){
      this.ukupnaCena=novaUkupnaCena;
    }
  }
  public ukupnaCena:number=0.0;
  ngOnInit(): void {}

}
