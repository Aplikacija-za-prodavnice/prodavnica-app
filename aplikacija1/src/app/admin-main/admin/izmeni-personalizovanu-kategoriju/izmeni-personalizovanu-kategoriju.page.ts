import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-personalizovanu-kategoriju',
  templateUrl: './izmeni-personalizovanu-kategoriju.page.html',
  styleUrls: ['./izmeni-personalizovanu-kategoriju.page.scss'],
})
export class IzmeniPersonalizovanuKategorijuPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.marketsAndProductsService.personalizovanaKategorijaIzmeni=this.marketsAndProductsService.personalizovaneKategorije.filter(kat=>kat.id==+this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }

  public izmeniPersonalizovano(){
    this.marketsAndProductsService.izmeniPersonalizovanuKategoriju(this.marketsAndProductsService.personalizovanaKategorijaIzmeni);
  }

}
