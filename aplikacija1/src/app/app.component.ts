import { Component } from '@angular/core';
import { AccountService } from './servisi/account/account.service';
import { MarketCheckingService } from './servisi/marketChecking/market-checking.service';
import { MarketsAndProductsService } from './servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public marketCheckingService:MarketCheckingService, public marketsAndProductsService:MarketsAndProductsService, private accountService:AccountService) {
  }
  ngOnInit(){
    this.marketsAndProductsService.ucitajProdavnice();
    this.marketsAndProductsService.preuzmiProizvode();
    this.marketsAndProductsService.preuzmiPersonalizovaneKategorije();
  }
}
