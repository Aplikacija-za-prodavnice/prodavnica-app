import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kategorija } from 'src/app/klase/Kategorija/Kategorija';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-kategoriju',
  templateUrl: './izmeni-kategoriju.page.html',
  styleUrls: ['./izmeni-kategoriju.page.scss'],
})
export class IzmeniKategorijuPage implements OnInit {

  constructor(public marketsAnProductsService:MarketsAndProductsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.marketsAnProductsService.kategorijaIzmeni=this.marketsAnProductsService.kategorije.filter(kategorija=>kategorija.id==+this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }
  public izmeniKategoriju(){
    this.marketsAnProductsService.izmeniKategoriju(this.marketsAnProductsService.kategorijaIzmeni);
  }

}
