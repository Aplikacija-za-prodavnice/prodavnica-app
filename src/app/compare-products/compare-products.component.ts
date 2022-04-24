import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Proizvod } from '../Klase/Proizvod';
import { MarketService } from '../servisi/marketService/market.service';
import { ProizvodiSearchService } from '../servisi/proizvodi/proizvodi-search.service';
@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit{

  public proizvod?:Proizvod=undefined;
  constructor(public marketService:MarketService, public proizvodiSearchService:ProizvodiSearchService) {
   }
  ngOnInit(): void {
  }
  public najmanjaCena():void{
    if(this.proizvodiSearchService.selection1.length>0){
      let min=this.proizvodiSearchService.selection1[0].cena;
    this.proizvodiSearchService.selection1.forEach(proizvod => {
      if(proizvod.cena!==undefined&&min!==undefined&&proizvod.cena<min)
      min=proizvod.cena;
    });
    this.proizvod=this.proizvodiSearchService.selection1.filter((proizvod:Proizvod)=>proizvod.cena===min)[0];
    }
  }
}
