import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiSearchService {

  public selection:Proizvod[];
  public proizvodi:Proizvod[];
  public selection1:Proizvod[]=new Array<Proizvod>();
  constructor(private http:HttpClient) { 
    this.uzmiProizvode();
  }
  public trazi(tekst:any){
    this.selection = this.proizvodi.filter(proiz=>!this.selection1.includes(proiz)&&proiz.naziv?.includes(tekst));
  }
  // public proizvodi:Array<Proizvod> = new Array(
  //   new Proizvod(
  //     "Proizvod 1",
  //     "Lidl supermarket",
  //     "sargarepa",
  //     500,
  //     "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     "kg"
  //   ),
  //   new Proizvod( 
  //     "Proizvod 2",
  //     "Lidl market",
  //     "sargarepa",
  //     400,
  //     "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     "kg"
  //   ),
  //   new Proizvod(
  //     "Proizvod 3",
  //     "Lidl supermarket",
  //     "sargarepa",
  //     300,
  //     "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     "kg"
  //   ),
  //   new Proizvod(
  //     "Proizvod 4",
  //     "Dis",
  //     "sargarepa",
  //     200,
  //     "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     "kg"
  //   ),
  //   new Proizvod(
  //     "Proizvod 5",
  //     "Dis",
  //     "sargarepa",
  //     100,
  //     "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     "kg"));
  //     public selection=this.proizvodi;
      public ubaciUSelection1(parametar:Proizvod){
        this.selection1.push(parametar);
        this.selection=this.selection.filter(proizvod=>proizvod.naziv!=parametar.naziv);
      }
      public izbaciIzSellection1(parametar:Proizvod){
        this.selection.push(parametar);
        this.selection1=this.selection1.filter(proizvod=>proizvod.naziv!=parametar.naziv);
      }
      private _proizvod: Proizvod = new Proizvod();
      public get proizvod(): Proizvod {
        return this._proizvod;
      }
      public set proizvod(value: Proizvod) {
        this._proizvod = value;
      }
      public uzmiProizvode():void{
        this.proizvodi=[];
        this.http.get<{[key: string]:Proizvod}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi.json")
        .pipe(map((proizvodi)=>{
          if(this.proizvodi.length==0){
            var proiz=new Array<Proizvod>();
            for(const key in proizvodi){
              proiz.push(new Proizvod(proizvodi[key].naziv,proizvodi[key].prodavnica,proizvodi[key].kategorija,proizvodi[key].cena,proizvodi[key].slika,proizvodi[key].jedinica));
            }
            return proiz;
          }
        }))
        .subscribe((data)=>{if(this.proizvodi.length==0){
          this.proizvodi=data;
          this.selection=data;
          console.log(this.proizvodi[0].slika);
        }});
      }
}
