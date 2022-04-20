import { Component, DoCheck, OnInit } from '@angular/core';
import { Proizvod } from '../Klase/Proizvod';
import { ProductService } from '../serivsi/proizvodi/product.service';
import { ShoppingCartService } from '../serivsi/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,DoCheck {

  constructor(public shoppingCartService:ShoppingCartService,public productService:ProductService) { }
  ngDoCheck(): void {
    let novaUkupnaCena:number=0;
    this.shoppingCartService.ShoppingCart.forEach(product => {
      novaUkupnaCena+=product.cena;
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
