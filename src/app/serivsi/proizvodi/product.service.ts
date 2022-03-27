import { Injectable } from '@angular/core';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { NizService } from '../niz/niz.service';
import { Proizvod } from 'src/app/Klase/Proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() {
   }




  private _proizvod: Proizvod = new Proizvod();
  public get proizvod(): Proizvod {
    return this._proizvod;
  }
  public set proizvod(value: Proizvod) {
    this._proizvod = value;
  }
  public sproizvodi = new Array();
  public proizvodi = new Array(
    {
      naziv:"Proizvod 1",
      prodavnica:"Lidl supermarket",
      kategorija:"sargarepa",
      cena:500,
      slika:"https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      jedinica:"kg"
    },
    {
      naziv:"Proizvod 2",
      prodavnica:"Lidl market",
      kategorija:"sargarepa",
      cena:400,
      slika:"https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      jedinica:"kg"
    },
    {
      naziv:"Proizvod 3",
      prodavnica:"Lidl supermarket",
      kategorija:"sargarepa",
      cena:300,
      slika:"https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      jedinica:"kg"
    },
    {
      naziv:"Proiavod 4",
      prodavnica:"Dis",
      kategorija:"sargarepa",
      cena:200,
      slika:"https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      jedinica:"kg"
    },
    {
      naziv:"Proizvod 5",
      prodavnica:"Dis",
      kategorija:"sargarepa",
      cena:100,
      slika:"https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      jedinica:"kg"
    }
    );
    ubaciProizvodUListu(proizvod:Object){
      
      this.sproizvodi.push(this.proizvodi.filter(proizvodL=>proizvodL===proizvod)[0]);
      this.proizvodi = this.proizvodi.filter(proiavodL=>proiavodL!==proizvod);
    }
    izbaciProizvodIzListe(proizvod:Object):void{
     this.proizvodi.push(this.sproizvodi.filter(pro=>pro===proizvod)[0]);
     this.sproizvodi=this.sproizvodi.filter(pro=>pro!==proizvod);
     console.log(this.proizvodi);
    }
    uporediCene():Proizvod{
      let min=this.sproizvodi[0];
      this.sproizvodi.forEach(proizvod => {
        min = proizvod.cena<min.cena?proizvod:min;
      });
      return min;
    }
}
