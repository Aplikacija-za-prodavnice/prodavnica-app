import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Proizvod } from '../Klase/Proizvod';
import { MarketService } from '../serivsi/marketService/market.service';
import { ProizvodiSearchService } from '../serivsi/proizvodi/proizvodi-search.service';
@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit{

  public proizvod:Proizvod=new Proizvod();
  constructor(public marketService:MarketService, public proizvodiSearchService:ProizvodiSearchService) {
   }
  ngOnInit(): void {
  }
  public najmanjaCena():Proizvod{
    let min=this.proizvodiSearchService.selection1[0].cena;
    this.proizvodiSearchService.selection1.forEach(proizvod => {
      if(proizvod.cena<min)
      min=proizvod.cena;
    });
    this.proizvod=this.proizvodiSearchService.selection1.filter((proizvod:Proizvod)=>proizvod.cena===min) as Proizvod;
    return this.proizvodiSearchService.selection1.filter((proizvod:Proizvod)=>proizvod.cena===min) as Proizvod;
  }
}
