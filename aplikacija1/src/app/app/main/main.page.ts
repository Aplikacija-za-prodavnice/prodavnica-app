import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { AccountService } from 'src/app/servisi/account/account.service';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';
import SwiperCore, {Navigation} from "swiper";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPage implements OnInit {

  public swiperConfig = {
    Pagination:true,
  };
  constructor(public marketsAndProductsService:MarketsAndProductsService,public account:AccountService) { }

  ngOnInit(): void {
    SwiperCore.use([Navigation]);
  }
}
