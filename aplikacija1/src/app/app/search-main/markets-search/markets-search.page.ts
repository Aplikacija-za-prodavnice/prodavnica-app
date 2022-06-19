import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketCheckingService } from 'src/app/servisi/marketChecking/market-checking.service';

@Component({
  selector: 'app-markets-search',
  templateUrl: './markets-search.page.html',
  styleUrls: ['./markets-search.page.scss'],
})
export class MarketsSearchPage implements OnInit {

   public cekirano:boolean = false;
   private observable:Observable<Object>;
   @ViewChildren('dugme') dugme;
   @ViewChild('search') pretrazivac;
   public opcije = [
    {naziv:"opcija1"},
    {naziv:"opcija2"},
    {naziv:"opcija3"},
    {naziv:"opcija4"},
    {naziv:"opcija5"},
  ];
  public opcije1=[];
  public opcije2=this.opcije;
  //  observable=new Observable((observer)=>{
  //    observer.next(this.dugme);
  //  });
  constructor(public marketCheckingService:MarketCheckingService) { 
    this.opcije=this.marketCheckingService.prodavnice;
    this.opcije1=this.marketCheckingService.prodavnice1;
    this.opcije2=this.marketCheckingService.prodavnice2;
  }
  ngAfterViewInit(){
    this.observable=new Observable(()=>{
      this.dugme._results.forEach(element => {
        element.el.addEventListener("click",()=>{
          let opcija =this.opcije2.filter(opcija=>opcija.naziv==element.name&&!element.checked===true)[0];
          if(opcija){
            this.opcije1.push(opcija);
          }
          let opcija1 =this.opcije2.filter(opcija=>opcija.naziv==element.name&&!element.checked===false)[0];
          if(opcija1){
            this.opcije1=this.opcije1.filter(opcija=>opcija.naziv!=opcija1.naziv);
          }
          console.log(this.opcije1);});
      });
      this.pretrazivac.el.addEventListener("input",()=>{
        this.opcije2=this.opcije.filter(opcija=>opcija.naziv.includes(this.pretrazivac.value));
        if(this.pretrazivac.value=="") this.opcije2=this.opcije;
      });
    });
    //console.log(this.dugme._results[1].el);
    this.observable.subscribe(()=>{});
  }

  ngOnInit() {
  }
}
