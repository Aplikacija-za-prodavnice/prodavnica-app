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
  public nizKlasa1:NizService=new NizService();
  public proizvodiKlasa:ProductService = new ProductService();
  constructor(private parametar:NizService, private parametar2:ProductService ) {
    this.nizKlasa1=this.parametar;
    this.proizvodiKlasa=this.parametar2;
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
