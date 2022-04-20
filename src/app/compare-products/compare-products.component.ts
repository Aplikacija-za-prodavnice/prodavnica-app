import { Component, Input, OnInit } from '@angular/core';
import { Proizvod } from '../Klase/Proizvod';
import { NizService } from '../serivsi/niz/niz.service';
import { ProductService } from '../serivsi/proizvodi/product.service';
@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {

  public proizvod:Proizvod=new Proizvod();
  constructor(public nizKlasa1:NizService, public proizvodiKlasa:ProductService) {
   }
  ngOnInit(): void {
  }
  odaberiProizvod(proizvod:Object):void{
    this.proizvodiKlasa.proizvod=proizvod;
  }
  proizvodSaNajmanjomCenom(){
    this.proizvod=this.proizvodiKlasa.uporediCene();
  }
}
