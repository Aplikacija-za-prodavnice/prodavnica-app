import { Component, OnInit } from '@angular/core';
import { Prodavnica } from 'src/app/klase/Prodavnica/prodavnica';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-prodavnice',
  templateUrl: './prodavnice.page.html',
  styleUrls: ['./prodavnice.page.scss'],
})
export class ProdavnicePage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }
  public izbrisiProdavnicu(prodavnica:Prodavnica){
    this.marketsAndProductsService.izbrisiProdavnicu(prodavnica);
  }
}
