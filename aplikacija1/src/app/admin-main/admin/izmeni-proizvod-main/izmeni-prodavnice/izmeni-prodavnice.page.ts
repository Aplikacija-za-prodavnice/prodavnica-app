import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-prodavnice',
  templateUrl: './izmeni-prodavnice.page.html',
  styleUrls: ['./izmeni-prodavnice.page.scss'],
})
export class IzmeniProdavnicePage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute);
  }

}
