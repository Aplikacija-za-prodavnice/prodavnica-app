import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kategorija } from 'src/app/klase/Kategorija/Kategorija';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-prikazi-kategoriju',
  templateUrl: './prikazi-kategoriju.page.html',
  styleUrls: ['./prikazi-kategoriju.page.scss'],
})
export class PrikaziKategorijuPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, public marketsAndProductsService:MarketsAndProductsService) { }
  public kategorija:Kategorija;
  ngOnInit() {
    this.kategorija=this.marketsAndProductsService.kategorije.filter(kategorija=>kategorija.id==+this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }

}
