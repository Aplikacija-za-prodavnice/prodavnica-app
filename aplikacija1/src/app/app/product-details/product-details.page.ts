import { DecimalPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  public greska="";
  //@ViewChild("greska") greska:any;
  @ViewChild("cena") cena:any;
  @ViewChild("dugme") dugme:any;
  private dozvoljeno:boolean=false;
  ngAfterViewInit(){
  }
  ngOnInit() {
    this.dozvoljeno=true;
  }
  public unesiProizvod(proizvod:Proizvod):void{
    console.log("Funkcija je pokrenuta");
    if(this.dozvoljeno===true&&isNaN(Number.parseFloat(this.cena.el.value.trim()))==false){
      if(Number.parseFloat(this.cena.el.value.trim())>0){
      this.marketsAndProductsService.ubaciUKorpu(proizvod,this.cena.el.value.trim());
      this.greska="";
      }
      else
      this.greska="kolicina ne sme biti manja ili jednaka nuli";
    }else{
      console.log("opcija 2 je pokrenuta");
      // console.log(this.greska);
       this.greska="Niste lepo ukucali kolicinu proizvoda";
    }
  }
}
