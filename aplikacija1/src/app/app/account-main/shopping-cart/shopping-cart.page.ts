import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProizvodiSearchService } from 'src/app/servisi/proizvodi/proizvodi-search.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  constructor(public proizvodiSearchService:ProizvodiSearchService,private menuController:MenuController) { }

  ngOnInit() {
  }

}
