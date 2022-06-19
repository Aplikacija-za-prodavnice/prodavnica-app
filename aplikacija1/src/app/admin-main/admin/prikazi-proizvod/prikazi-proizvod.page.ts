import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-prikazi-proizvod',
  templateUrl: './prikazi-proizvod.page.html',
  styleUrls: ['./prikazi-proizvod.page.scss'],
})
export class PrikaziProizvodPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService, private activatedRoute:ActivatedRoute) { }

  public proizvod:Proizvod;

  ngOnInit() {
    this.proizvod=this.marketsAndProductsService.proizvodi[this.activatedRoute.snapshot.paramMap.get('id')];
  }

}
