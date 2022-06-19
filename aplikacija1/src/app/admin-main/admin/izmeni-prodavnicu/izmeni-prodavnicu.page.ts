import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-prodavnicu',
  templateUrl: './izmeni-prodavnicu.page.html',
  styleUrls: ['./izmeni-prodavnicu.page.scss'],
})
export class IzmeniProdavnicuPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.marketsAndProductsService.prodavnicaIzmeni=this.marketsAndProductsService.prodavnice.filter(prodavnica=>prodavnica.id==+this.activatedRoute.snapshot.paramMap.get("id"))[0];
  }
  public izmeniProdavnicu(){
    this.marketsAndProductsService.izmeniProdavnicu(this.marketsAndProductsService.prodavnicaIzmeni);
  }

}
