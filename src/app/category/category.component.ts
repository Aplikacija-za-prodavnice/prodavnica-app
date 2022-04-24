import { Component, OnInit } from '@angular/core';
import SwiperCore, {Navigation} from "swiper";
import { CategorySearchService } from '../servisi/category/category-search.service';
import { ProizvodiSearchService } from '../servisi/proizvodi/proizvodi-search.service';
import { ShoppingCartService } from '../servisi/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public categorySearchService:CategorySearchService, public proizvodiSearchService:ProizvodiSearchService,public shoppingChartService:ShoppingCartService) { }

  public swiperConfig = {
    Pagination:true,
  };
  
  ngOnInit(): void {
    SwiperCore.use([Navigation]);
  }

}
