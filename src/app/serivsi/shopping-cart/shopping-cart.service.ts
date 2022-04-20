import { Injectable } from '@angular/core';
import { Proizvod } from 'src/app/Klase/Proizvod';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  public ShoppingCart = new Array();

  public ubaciProizvodUKorpu(proizvod2:Proizvod){
    if(proizvod2!==null)
      this.ShoppingCart.push(proizvod2);
      else
      console.error("Proizvod nije inicijalizovan");
  }
  public izbaciProizvodIzKorpe(proizvod1:Proizvod){
    if(proizvod1!==null){
    this.ShoppingCart=this.ShoppingCart.filter(proizvod=>proizvod!==proizvod1);
    }
    else
    console.error("Proizvod nije inicijalizovan");
  }
  public omiljeno = new Array(
    new Proizvod(
      // naziv:
      "Proizvod 1",
      // prodavnica:
      "Lidl supermarket",
      // kategorija:
      "sargarepa",
      // cena:
      500,
      // slika:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // jedinica:
      "kg"
    ), 
    new Proizvod(
      // naziv:
      "Proizvod 2",
      // prodavnica:
      "Lidl market",
      // kategorija:
      "sargarepa",
      // cena:
      400,
      // slika:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // jedinica:
      "kg"
  ),
    new Proizvod(
      // naziv:
      "Proizvod 3",
      // prodavnica:
      "Lidl supermarket",
      // kategorija:
      "sargarepa",
      // cena:
      300,
      // slika:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // jedinica:
      "kg"
  ),
    new Proizvod(
      // naziv:
      "Proizvod 4",
      // prodavnica:
      "Dis",
      // kategorija:
      "sargarepa",
      // cena:
      200,
      // slika:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // jedinica:
      "kg"
  ),
    new Proizvod(
      // naziv:
      "Proizvod 5",
      // prodavnica:
      "Dis",
      // kategorija:
      "sargarepa",
      // cena:
      100,
      // slika:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // jedinica:
      "kg"
  )
    );
    public snizenja = new Array(
      new Proizvod(
        // naziv:
        "Proizvod 6",
        // prodavnica:
        "Lidl supermarket",
        // kategorija:
        "sargarepa",
        // cena:
        500,
        // slika:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // jedinica:
        "kg"
      ), 
      new Proizvod(
        // naziv:
        "Proizvod 7",
        // prodavnica:
        "Lidl market",
        // kategorija:
        "sargarepa",
        // cena:
        400,
        // slika:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // jedinica:
        "kg"
    ),
      new Proizvod(
        // naziv:
        "Proizvod 8",
        // prodavnica:
        "Lidl supermarket",
        // kategorija:
        "sargarepa",
        // cena:
        300,
        // slika:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // jedinica:
        "kg"
    ),
      new Proizvod(
        // naziv:
        "Proizvod 9",
        // prodavnica:
        "Dis",
        // kategorija:
        "sargarepa",
        // cena:
        200,
        // slika:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // jedinica:
        "kg"
    ),
      new Proizvod(
        // naziv:
        "Proizvod 10",
        // prodavnica:
        "Dis",
        // kategorija:
        "sargarepa",
        // cena:
        100,
        // slika:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // jedinica:
        "kg"
    )
      );
      public novo = new Array(
        new Proizvod(
          // naziv:
          "Proizvod 11",
          // prodavnica:
          "Lidl supermarket",
          // kategorija:
          "sargarepa",
          // cena:
          500,
          // slika:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          // jedinica:
          "kg"
        ), 
        new Proizvod(
          // naziv:
          "Proizvod 12",
          // prodavnica:
          "Lidl market",
          // kategorija:
          "sargarepa",
          // cena:
          400,
          // slika:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          // jedinica:
          "kg"
      ),
        new Proizvod(
          // naziv:
          "Proizvod 13",
          // prodavnica:
          "Lidl supermarket",
          // kategorija:
          "sargarepa",
          // cena:
          300,
          // slika:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          // jedinica:
          "kg"
      ),
        new Proizvod(
          // naziv:
          "Proizvod 14",
          // prodavnica:
          "Dis",
          // kategorija:
          "sargarepa",
          // cena:
          200,
          // slika:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          // jedinica:
          "kg"
      ),
        new Proizvod(
          // naziv:
          "Proizvod 15",
          // prodavnica:
          "Dis",
          // kategorija:
          "sargarepa",
          // cena:
          100,
          // slika:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          // jedinica:
          "kg"
      ) 
        );
}

