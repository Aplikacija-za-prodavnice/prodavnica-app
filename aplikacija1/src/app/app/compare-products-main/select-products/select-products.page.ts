import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProizvodiSearchService } from 'src/app/servisi/proizvodi/proizvodi-search.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.page.html',
  styleUrls: ['./select-products.page.scss'],
})
export class SelectProductsPage implements OnInit {

  constructor(public proizvodiSearchService:ProizvodiSearchService ) { }

  observable=new Observable((observer)=>{
    document.getElementById("productSearch")?.addEventListener('input',()=>{observer.next(this.ionSearchbar.value.toString())});
  });
  @ViewChild('productSearch') ionSearchbar:any;
  ngOnInit(): void {
    this.observable.subscribe((value)=>{this.proizvodiSearchService.trazi(value)});
  }

}
