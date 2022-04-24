import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorySearchService } from '../servisi/category/category-search.service';

@Component({
  selector: 'app-categories-search',
  templateUrl: './categories-search.component.html',
  styleUrls: ['./categories-search.component.css']
})
export class CategoriesSearchComponent implements OnInit,AfterViewInit {

  @ViewChild('categorySearch') categorySearch:any;
  private inicijalizovano:boolean=false;
  constructor(public categorySearchService:CategorySearchService) { }
  ngAfterViewInit(): void {
    this.inicijalizovano=true;
  }
  private observable=new Observable((observer)=>{
    document.getElementById("categorySearch")?.addEventListener('input',()=>{if(this.inicijalizovano)observer.next(this.categorySearch.value)});
  });
  ngOnInit(): void {
    this.observable.subscribe((value)=>{this.categorySearchService.trazi(value as string)});
  }

}
