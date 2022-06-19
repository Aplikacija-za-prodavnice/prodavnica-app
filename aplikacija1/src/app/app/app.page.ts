import { Component, OnInit } from '@angular/core';
import { AccountService } from '../servisi/account/account.service';
import { MarketsAndProductsService } from '../servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  constructor(public account:AccountService,public marketsAndProductsService:MarketsAndProductsService) { }

  ngOnInit() {
  }

}
