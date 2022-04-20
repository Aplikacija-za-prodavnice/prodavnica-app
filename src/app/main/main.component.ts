import { Component, OnInit ,ViewEncapsulation, ViewChild} from '@angular/core';
import SwiperCore, {Navigation} from "swiper";
import { Proizvod } from '../Klase/Proizvod';
import { ProductService } from '../serivsi/proizvodi/product.service';
import { ShoppingCartService } from '../serivsi/shopping-cart/shopping-cart.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

 public swiperConfig = {
   Pagination:true,
 };
  constructor(public shoppingCartService:ShoppingCartService, public productService:ProductService) {

  }

  ngOnInit(): void {
    SwiperCore.use([Navigation]);
  }
  ubaciProizvodUKorpu(product:Proizvod){
    this.shoppingCartService.ubaciProizvodUKorpu(product);
  }

}
