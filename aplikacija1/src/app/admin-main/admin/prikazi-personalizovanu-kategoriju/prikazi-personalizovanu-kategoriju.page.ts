import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PersonalizovanaKategorija from 'src/app/klase/Personalizovano/Personalizovano';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-prikazi-personalizovanu-kategoriju',
  templateUrl: './prikazi-personalizovanu-kategoriju.page.html',
  styleUrls: ['./prikazi-personalizovanu-kategoriju.page.scss'],
})
export class PrikaziPersonalizovanuKategorijuPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService,private activatedRoute:ActivatedRoute) { }

  public personalizovanaKategorija:PersonalizovanaKategorija;
  ngOnInit() {
    this.personalizovanaKategorija=this.marketsAndProductsService.personalizovaneKategorije.filter(kat=>kat.id==+this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }

}
