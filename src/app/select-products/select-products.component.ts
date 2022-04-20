import { Component, OnInit } from '@angular/core';
import { NizService } from '../serivsi/niz/niz.service';
import { ProductService } from '../serivsi/proizvodi/product.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {

  constructor(public proizvodiKlasa:ProductService ) {
  }

  ngOnInit(): void {
    console.log(this.proizvodiKlasa.proizvod);
  }

}
