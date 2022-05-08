import { Component, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketService } from 'src/app/servisi/market/market.service';
import { ProizvodiSearchService } from 'src/app/servisi/proizvodi/proizvodi-search.service';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.page.html',
  styleUrls: ['./compare-products.page.scss'],
})
export class CompareProductsPage implements OnInit {

  public proizvod?:Proizvod=undefined;
  constructor(public marketService:MarketService, public proizvodiSearchService:ProizvodiSearchService) {
  }
 ngOnInit(): void {
  //  this.proizvodiSearchService.uzmiProizvode();
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
