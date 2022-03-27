import { Component, OnInit } from '@angular/core';
import { ProductService } from '../serivsi/proizvodi/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public proizvodiKlasa:ProductService=new ProductService();
  constructor(parametar1:ProductService) {
    this.proizvodiKlasa=parametar1;
   }

  ngOnInit(): void {
  }

}
