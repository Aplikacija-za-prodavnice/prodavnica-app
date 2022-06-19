import { Component, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.page.html',
  styleUrls: ['./compare-products.page.scss'],
})
export class CompareProductsPage implements OnInit {

  public proizvod?:Proizvod=undefined;
  constructor(public marketsAndProductsService:MarketsAndProductsService) {
  }
 ngOnInit(): void {
  //  this.proizvodiSearchService.uzmiProizvode();
 }
}
