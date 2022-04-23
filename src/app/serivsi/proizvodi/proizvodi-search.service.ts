import { Injectable } from '@angular/core';
import { Proizvod } from 'src/app/Klase/Proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiSearchService {

  
  constructor() { }

  public trazi(naziv:any){
    this.proizvodi.forEach(proizvod=>{
      if(!this.selection.includes(proizvod)&&!this.selection1.includes(proizvod))
      this.selection.push(proizvod);
    });
    if(naziv==""){
      this.proizvodi.forEach(proizvod=>{
        if(!this.selection.includes(proizvod)&&!this.selection1.includes(proizvod))
        this.selection.push(proizvod);
      });
    return;
    }else{
        this.selection=this.selection.filter(pr=>pr.naziv?.includes(naziv));
    }
  }
  public proizvodi = new Array(
    new Proizvod(
      "Proizvod 1",
      "Lidl supermarket",
      "sargarepa",
      500,
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "kg"
    ),
    new Proizvod( 
      "Proizvod 2",
      "Lidl market",
      "sargarepa",
      400,
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "kg"
    ),
    new Proizvod(
      "Proizvod 3",
      "Lidl supermarket",
      "sargarepa",
      300,
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "kg"
    ),
    new Proizvod(
      "Proizvod 4",
      "Dis",
      "sargarepa",
      200,
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "kg"
    ),
    new Proizvod(
      "Proizvod 5",
      "Dis",
      "sargarepa",
      100,
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "kg"));
      public selection=this.proizvodi;
      public selection1=new Array();
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
}
