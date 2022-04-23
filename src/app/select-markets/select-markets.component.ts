import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Prodavnica } from '../Klase/Markets';
import { MarketService } from '../serivsi/marketService/market.service';
@Component({
  selector: 'app-select-markets',
  templateUrl: './select-markets.component.html',
  styleUrls: ['./select-markets.component.css']
})
export class SelectMarketsComponent implements OnInit  {

  constructor(public marketService:MarketService) { 
  }
  private subscription=new Subscription();
   @ViewChild('marketSearch') ionSearchbar:any;
  private observable=new Observable((observer)=>{
    document.getElementById("marketSearch")?.addEventListener('input',()=>{observer.next(this.ionSearchbar.value.toString());});
  });
  ngOnInit(): void {
    
  }
  funkcija1(parametar:Prodavnica):void{
    this.subscription.unsubscribe();
    this.marketService.ubaciUSelection1(parametar);
  }
  pretrazi(){
    this.subscription=this.observable.subscribe((value)=>{this.marketService.potrazi(value)});
  }
  
}
