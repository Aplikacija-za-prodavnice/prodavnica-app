import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodavnica } from 'src/app/klase/Prodavnica/prodavnica';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarketCheckingService {

  public prodavnice:Prodavnica[];
  public prodavnice1:Prodavnica[]=[];
  public prodavnice2:Prodavnica[];
  constructor(public httpClient:HttpClient) {
    this.ucitajProdavnice();
  }
  private ucitajProdavnice():void{
    this.httpClient.get<{[key:number]:Prodavnica}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice.json")
    .pipe(map(res=>{
      var prod =new Array<Prodavnica>();
      for(const key in res){
        if(res[key]!=null){
          prod.push(new Prodavnica(key,res[key].id,res[key].naziv,res[key].lokacija,res[key].slika));
        }
      }
      return prod;
    }))
    .subscribe(data=>{
      this.prodavnice=data;
      this.prodavnice2=data;
    });
  }
}
