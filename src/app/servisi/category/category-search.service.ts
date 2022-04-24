import { Injectable } from '@angular/core';
import { Kategorija } from 'src/app/Klase/Kategorija';
import { Proizvod } from 'src/app/Klase/Proizvod';

@Injectable({
  providedIn: 'root'
})
export class CategorySearchService {

  constructor() { }
  public kategorija= new Kategorija("",[]);
  public kategorije:Array<Kategorija>=[
    new Kategorija("Kategorija 1",new Array<Proizvod>
      (
        new Proizvod("Proizvod 1","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Proizvod("Proizvod 2","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Proizvod("Proizvod 3","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      )
    ),
    new Kategorija("Kategorija 2",new Array<Proizvod>
      (
        new Proizvod("Proizvod 4","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Proizvod("Proizvod 5","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Proizvod("Proizvod 6","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      )
    ),
    new Kategorija("Kategorija 3",new Array<Proizvod>
      (
        new Proizvod("Proizvod 7","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Proizvod("Proizvod 8","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Proizvod("Proizvod 9","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      )
    ),
    new Kategorija("Kategorija 4",new Array<Proizvod>
    (
      new Proizvod("Proizvod 10","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 11","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 12","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )
    ),
    new Kategorija("Kategorija 5",new Array<Proizvod>
    (
      new Proizvod("Proizvod 13","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 14","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 15","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )
    ),
    new Kategorija("Kategorija 6",new Array<Proizvod>
    (
      new Proizvod("Proizvod 16","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 17","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 18","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )
    ),
    new Kategorija("Kategorija 7",new Array<Proizvod>
    (
      new Proizvod("Proizvod 19","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 20","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 21","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )),
    new Kategorija("Kategorija 8",new Array<Proizvod>
    (
      new Proizvod("Proizvod 22","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 23","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 24","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )),
    new Kategorija("Kategorija 9",new Array<Proizvod>
    (
      new Proizvod("Proizvod 25","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 26","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 27","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )),
    new Kategorija("Kategorija 10",new Array<Proizvod>
    (
      new Proizvod("Proizvod 28","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 29","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
      new Proizvod("Proizvod 30","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
    )),
  ];
  public selection:Array<Kategorija>=this.kategorije;
  public trazi(tekst:string){
    this.selection=this.kategorije;
      this.selection=this.selection.filter(kat=>kat.naziv.includes(tekst));
  }
}
