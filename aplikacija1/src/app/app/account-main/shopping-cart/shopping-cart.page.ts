import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { ProizvodiSearchService } from 'src/app/servisi/proizvodi/proizvodi-search.service';
import { ShoppingCartService } from 'src/app/servisi/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  constructor(public shoppingCartService:ShoppingCartService,public proizvodiSeachService:ProizvodiSearchService) { }
  ngDoCheck(): void {
    let novaUkupnaCena:number=0;
    this.shoppingCartService.ShoppingCart.forEach(product => {
      if(product.cena!==undefined)novaUkupnaCena+=product.cena;
    });
    if(this.ukupnaCena!==novaUkupnaCena){
      this.ukupnaCena=novaUkupnaCena;
    }
  }
  public ukupnaCena:number=0;
  ngOnInit(): void {}
  public izbaciProizvodIzKorpe(product:Proizvod){
    this.shoppingCartService.izbaciProizvodIzKorpe(product);
    console.log(this.shoppingCartService.ShoppingCart);
  }

}
