import { Component, OnInit } from '@angular/core';
import { Kategorija } from 'src/app/klase/Kategorija/Kategorija';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.page.html',
  styleUrls: ['./kategorije.page.scss'],
})
export class KategorijePage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }
  public izbrisiKategoriju(kategorija:Kategorija){
    this.marketsAndProductsService.izbrisiKategoriju(kategorija);
  }

}
