import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public omiljeno:Proizvod[];
  public novo:Proizvod[];
  public snizenja:Proizvod[];
  constructor(private http:HttpClient) {
    this.ucitajProizvode();
   }
  public ShoppingCart:Array<Proizvod> = new Array<Proizvod>();

  public ubaciProizvodUKorpu(proizvod2:Proizvod){
    if(proizvod2!==null)
      this.ShoppingCart.push(proizvod2);
      else
      console.error("Proizvod nije inicijalizovan");
      console.log(this.ShoppingCart);
  }
  public izbaciProizvodIzKorpe(proizvod1:Proizvod){
    if(proizvod1!==null){
    this.ShoppingCart=this.ShoppingCart.filter(proizvod=>proizvod!==proizvod1);
    }
    else
    console.error("Proizvod nije inicijalizovan");
  }
  // public omiljeno:Array<Proizvod> = new Array<Proizvod>(
  //   new Proizvod("Proizvod 1","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"), 
  //   new Proizvod("Proizvod 2","Lidl market","sargarepa",400,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //   new Proizvod("Proizvod 3","Lidl supermarket","sargarepa",300,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //   new Proizvod("Proizvod 4","Dis","sargarepa",200,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //   new Proizvod("Proizvod 5","Dis","sargarepa",100,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg")
  //   );
  //   public snizenja:Array<Proizvod> = new Array<Proizvod>(
  //     new Proizvod("Proizvod 6","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"), 
  //     new Proizvod("Proizvod 7","Lidl market","sargarepa",400,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //     new Proizvod("Proizvod 8","Lidl supermarket","sargarepa",300,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //     new Proizvod("Proizvod 9","Dis","sargarepa",200,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //     new Proizvod("Proizvod 10","Dis","sargarepa",100,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg")
  //     );
  //     public novo:Array<Proizvod> = new Array<Proizvod>(
  //       new Proizvod("Proizvod 11","Lidl supermarket","sargarepa",500,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"), 
  //       new Proizvod("Proizvod 12","Lidl market","sargarepa",400,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //       new Proizvod("Proizvod 13","Lidl supermarket","sargarepa",300,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //       new Proizvod("Proizvod 14","Dis","sargarepa",200,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
  //       new Proizvod("Proizvod 15","Dis","sargarepa",100,"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg") 
  //       );
        ucitajProizvode():void{
          this.http.get<{[key:number]:Proizvod}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi.json")
          .pipe(map(proizvodi=>{
            var proiz= new Array<Proizvod>();
            for(const key in proizvodi){
              proiz.push(new Proizvod(proizvodi[key].naziv,proizvodi[key].prodavnica,proizvodi[key].kategorija,proizvodi[key].cena,proizvodi[key].slika,proizvodi[key].jedinica));
            }
            return proiz;
          }))
          .subscribe((data:Array<Proizvod>)=>{
            this.omiljeno=data.filter(proizvod=>proizvod.kategorija.includes("omiljeno"));
            this.novo=data.filter(proizvod=>proizvod.kategorija.includes("novo"));
            this.snizenja=data.filter(proizvod=>proizvod.kategorija.includes("snizenja"));
          console.log(data);});
        }
}
