import { Component, OnInit } from '@angular/core';
import PersonalizovanaKategorija from 'src/app/klase/Personalizovano/Personalizovano';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-personalizovane-kategorije',
  templateUrl: './personalizovane-kategorije.page.html',
  styleUrls: ['./personalizovane-kategorije.page.scss'],
})
export class PersonalizovaneKategorijePage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }
  public izbrisiPerKategoriju(perKat:PersonalizovanaKategorija){
    this.marketsAndProductsService.izbrisiPersonalizovanuKategoriju(perKat);
  }
}
