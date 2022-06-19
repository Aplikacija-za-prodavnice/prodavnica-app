import { Component, OnInit } from '@angular/core';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }

}
