import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodavnica } from 'src/app/klase/Prodavnica/prodavnica';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-prikazi-prodavnicu',
  templateUrl: './prikazi-prodavnicu.page.html',
  styleUrls: ['./prikazi-prodavnicu.page.scss'],
})
export class PrikaziProdavnicuPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private marketsAndProductsService:MarketsAndProductsService) { }

  public prodavnica:Prodavnica;
  ngOnInit() {
    this.prodavnica=this.marketsAndProductsService.prodavnice.filter(prodavnica=>prodavnica.id==+this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }

}
