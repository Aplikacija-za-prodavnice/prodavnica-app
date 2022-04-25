import { Component, OnInit, ViewChild } from '@angular/core';
import { Prodavnica } from '../Klase/Markets';
import { MarketService } from '../servisi/marketService/market.service';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.css']
})
export class MarketSearchComponent implements OnInit {

  constructor(public marketService:MarketService) { }
  public checked:boolean=true;
  public prodavnice:Array<ProdavnicaIDugme>=new Array();
  ngOnInit(): void {
    this.marketService.prodavnice.forEach(prodavnica=>{
      this.prodavnice.push(new ProdavnicaIDugme(prodavnica,false));
    });
  }
  public funkcija(index:number){
    
  }

}
 class ProdavnicaIDugme{
   public prodavnica:Prodavnica=new Prodavnica("","","");
   public checked:boolean=false;
   constructor(prodavnica:Prodavnica,checked:boolean){
     this.prodavnica=prodavnica;
     this.checked=checked;
   }
}
