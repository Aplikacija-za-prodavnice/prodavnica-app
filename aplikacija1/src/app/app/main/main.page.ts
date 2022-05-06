import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { AccountService } from 'src/app/servisi/account/account.service';
import { ProizvodiSearchService } from 'src/app/servisi/proizvodi/proizvodi-search.service';
import { ShoppingCartService } from 'src/app/servisi/shoppingCart/shopping-cart.service';
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
  constructor(public shoppingCartService:ShoppingCartService,public proizvodiSearchService:ProizvodiSearchService,public account:AccountService) { }

  ngOnInit(): void {
    SwiperCore.use([Navigation]);
  }
  ubaciProizvodUKorpu(product:Proizvod){
    this.shoppingCartService.ubaciProizvodUKorpu(product);
  }
}
