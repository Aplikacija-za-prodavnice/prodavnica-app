import { Component, OnInit } from '@angular/core';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService) {
   }

  ngOnInit() {
  }

}
