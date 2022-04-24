import { Component, OnInit } from '@angular/core';
import { ProizvodiSearchService } from '../servisi/proizvodi/proizvodi-search.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public proizvodiSearchService:ProizvodiSearchService) {
   }

  ngOnInit(): void {
  }

}
