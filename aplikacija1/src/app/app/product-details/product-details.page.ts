import { Component, OnInit } from '@angular/core';
import { ProizvodiSearchService } from 'src/app/servisi/proizvodi/proizvodi-search.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(public proizvodiSearchService:ProizvodiSearchService) { }

  ngOnInit() {
  }

}
