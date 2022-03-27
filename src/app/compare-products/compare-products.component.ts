import { Component, Input, OnInit } from '@angular/core';
import { SelectMarketsComponent } from '../select-markets/select-markets.component';
@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {

  public prodavnice1 = new SelectMarketsComponent().sprodavnice;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  funkcija1(){
    console.log(this.prodavnice1);
  }
}
