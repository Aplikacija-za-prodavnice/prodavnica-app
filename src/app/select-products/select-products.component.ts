import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProizvodiSearchService } from '../serivsi/proizvodi/proizvodi-search.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {

  constructor(public proizvodiSearchService:ProizvodiSearchService ) {
  }

  observable=new Observable((observer)=>{
    document.getElementById("productSearch")?.addEventListener('input',()=>{observer.next(this.ionSearchbar.value.toString())});
  });
  @ViewChild('productSearch') ionSearchbar:any;
  ngOnInit(): void {
    this.observable.subscribe((value)=>{this.proizvodiSearchService.trazi(value)});
  }

}
