import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.page.html',
  styleUrls: ['./select-products.page.scss'],
})
export class SelectProductsPage implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService, public marketsAndProductsServise:MarketsAndProductsService ) { }

  observable=new Observable((observer)=>{
    document.getElementById("productSearch")?.addEventListener('input',()=>{observer.next(this.ionSearchbar.value.toString())});
  });
  @ViewChild('productSearch') ionSearchbar:any;

  ngAfterViewInit():void{
    this.observable.subscribe((value)=>{this.marketsAndProductsServise.trazi(value)});
  }
  ngOnInit(): void {
    
  }

}
