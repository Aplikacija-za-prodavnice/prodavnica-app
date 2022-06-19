import { Component, OnInit } from '@angular/core';
import { MarketsAndProductsService } from '../servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.page.html',
  styleUrls: ['./admin-main.page.scss'],
})
export class AdminMainPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }

}
