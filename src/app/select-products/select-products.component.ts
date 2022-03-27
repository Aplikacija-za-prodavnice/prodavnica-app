import { Component, OnInit } from '@angular/core';
import { NizService } from '../serivsi/niz/niz.service';
import { ProductService } from '../serivsi/proizvodi/product.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {

  public proizvodiKlasa:ProductService = new ProductService();
  constructor(parametar:ProductService , parametar2:NizService) {
    this.proizvodiKlasa = parametar;
  }

  ngOnInit(): void {
    console.log(this.proizvodiKlasa.proizvod);
  }

}
