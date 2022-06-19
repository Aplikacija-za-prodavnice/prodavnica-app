import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { keepUnstableUntilFirst } from '@angular/fire';
import { tap,map } from 'rxjs/operators';
import { KupljenProizvod } from 'src/app/klase/KupljenProizvod/KupljenProizvod';
import PersonalizovanaKategorija from 'src/app/klase/Personalizovano/Personalizovano';
import { Prodavnica } from 'src/app/klase/Prodavnica/prodavnica';
import { Proizvod } from 'src/app/klase/proizvod/proizvod';
import { Kategorija } from '../../klase/Kategorija/Kategorija';

@Injectable({
  providedIn: 'root'
})
export class MarketsAndProductsService {

  //lista svih prodavnice koje postoje u bazi
  public prodavnice:Prodavnica[]; 
  //lista prodavnica koja se pojavljuje prilikom pretrazivanja
  public prodavnice1:Prodavnica[];
  //lista prodavnica koju je formirao korisnik odabiruci prodavnice iz prodavnice1
  public prodavnice2:Prodavnica[]=[];
  //proizvodi koji se nalaze u bazi
  public proizvodi:Proizvod[];
  //proizvodi koji su izlistani za pretrazivanje
  public proizvodi1:Proizvod[];
  //proizvodi koje je kupac odabrao
  public proizvodi2:Proizvod[]=[];
  //lista kategorija koje se nalaze u bazi
  public kategorije:Kategorija[];
  //korpa za proizvode koje korisnik zeli da kupi
  public korpa:KupljenProizvod[]=[];
  //personalizovane kategorije preuzete iz baze
  public personalizovaneKategorije:PersonalizovanaKategorija[];
  //Proizvod ciji se podaci menjaju
  public proizvodIzmeni:Proizvod;
  //prodavnica ciji se podaci menjaju
  public prodavnicaIzmeni:Prodavnica;
  //kategorija ciji se podaci menjaju
  public kategorijaIzmeni:Kategorija;
  //personalizovana kategorija ciji se poadci menjaju
  public personalizovanaKategorijaIzmeni:PersonalizovanaKategorija;
  constructor(private http:HttpClient) { 
    this.ucitajProdavnice();
    this.preuzmiProizvode();
    this.preuzmiPersonalizovaneKategorije();
    this.preuzmiKategorije();
  }
  //ucitavanje svih prodavnica iz baze
  public ucitajProdavnice():void{
    this.http.get<{[key:number]:Prodavnica}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice.json")
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
      this.prodavnice1=data;
    });
  }
  //pretrazivanje
  public potrazi(tekst:any){
    if(tekst=="")
    this.prodavnice1=this.prodavnice;
    this.prodavnice1 = this.prodavnice.filter(prodavnica=>!this.prodavnice2.includes(prodavnica)&&prodavnica.naziv?.includes(tekst));
  }
  //ubaci prodavnicu u listu zeljenih prodavnica
  public ubaciUProdavnice2(parametar:Prodavnica){
    this.prodavnice2.push(this.prodavnice1.filter(prodavnica=>prodavnica.naziv===parametar.naziv)[0]);
    this.prodavnice1=this.prodavnice1.filter(prodavnica=>prodavnica.naziv!==parametar.naziv);
    this.proizvodi1 = this.proizvodi.filter(proiz=>!this.proizvodi2.includes(proiz)&&this.prodavnice2.filter(prodavnica=>proiz.UProdavnici.includes(prodavnica.id)).length>0);
  }
  //izbaci iz zeljene liste
  public izbaciIzProdavnice2(parametar:Prodavnica){
    this.prodavnice1.push(parametar);
    this.prodavnice2=this.prodavnice2.filter(prodavnica=>prodavnica.naziv!==parametar.naziv);
    this.proizvodi.filter(proiz=>!this.proizvodi2.includes(proiz)&&this.prodavnice2.filter(prodavnica=>proiz.UProdavnici.includes(prodavnica.id)).length==0).forEach(pro=>{
      if(!this.proizvodi1.includes(pro)){
        this.proizvodi1.push(pro);
      }
    });
  }
  //preuzmi proizvode iz baze
  public preuzmiProizvode():void{
    this.proizvodi=[];
    this.http.get<{[key: string]:Proizvod}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi.json")
    .pipe(map((proizvodi)=>{
      if(this.proizvodi.length==0){
        var proiz=new Array<Proizvod>();
        for(const key in proizvodi){
          proiz.push(new Proizvod(key,proizvodi[key].naziv,proizvodi[key].kategorije==undefined?[]:proizvodi[key].kategorije,proizvodi[key].personalizovano==undefined?[]:proizvodi[key].personalizovano,proizvodi[key].cena,proizvodi[key].UProdavnici==undefined?[]:proizvodi[key].UProdavnici,proizvodi[key].slika,proizvodi[key].jedinica));
        }
        return proiz;
      }
    }))
    .subscribe((data)=>{if(this.proizvodi.length==0){
      this.proizvodi=data;
      this.proizvodi1=data;
    }});
  }
  // ubaci u zeljenu listu proizvoda
  public ubaciUProizvodi2(parametar:Proizvod){
    this.proizvodi2.push(parametar);
    this.proizvodi1=this.proizvodi1.filter(proizvod=>proizvod.naziv!=parametar.naziv);
  }
  //izbaci iz zeljene liste proizvoda
  public izbaciIzProizvodi2(parametar:Proizvod){
    this.proizvodi1.push(parametar);
    this.proizvodi2=this.proizvodi2.filter(proizvod=>proizvod.naziv!=parametar.naziv);
    if(this.proizvodi2.length==0){
      this.proizvodMin=undefined;
    }
  }
  //pretrazi proizvode koji se nalaze u odredjenoj prodavnici
  public trazi(tekst:any){
    if(this.prodavnice2.length==0){
      if(tekst=="")
    this.proizvodi1=this.proizvodi;
    this.proizvodi1 = this.proizvodi.filter(proiz=>!this.proizvodi2.includes(proiz)&&proiz.naziv?.includes(tekst));
    }else{
      if(tekst=="")
    this.proizvodi1=this.proizvodi.filter(proizvod=>this.prodavnice2.filter(prodavnica=>proizvod.UProdavnici.includes(prodavnica.id)).length>0);
    this.proizvodi1 = this.proizvodi.filter(proiz=>!this.proizvodi2.includes(proiz)&&proiz.naziv?.includes(tekst)&&this.prodavnice2.filter(prodavnica=>proiz.UProdavnici.includes(prodavnica.id)).length>0);
    }
  }
  //uzmi prodavnice za zeljeni pzoivod
  public vratiProdavniceZaProizvod(prodavnice:number[]):Prodavnica[]{
    return this.prodavnice.filter(prodavnica=>prodavnice.includes(prodavnica.id));
  }
  //uzmi kategorije za zeljeni proizvod
  public vratiKategorijeZaProizvod(kategorije:number[]){
    return kategorije==undefined?[]:this.kategorije.filter(kategorija=>kategorije.includes(kategorija.id));
  }
  //uzmi personalizovane kategorije vezane za prozivod
  public vratiPersonalizovaneKategorijeZaProizvod(personalizovane:number[]){
    return this.personalizovaneKategorije.filter(per=>personalizovane.includes(per.id));
  }
  //proizvod za stranicu detaljnije
  private _proizvod: Proizvod = new Proizvod("");
  //getter
  public get proizvod(): Proizvod {
    return this._proizvod;
  }
  //setter
  public set proizvod(value: Proizvod) {
    this._proizvod = value;
  }
  //proizvod sa najmanjom cenom
  public proizvodMin:Proizvod;
  //izracunaj proizvod sa najmanjom cenom
  public najmanjaCena():void{
    if(this.proizvodi2.length>0){
      let min=this.proizvodi2[0].cena;
    this.proizvodi2.forEach(proizvod => {
      if(proizvod.cena!==undefined&&min!==undefined&&proizvod.cena<min)
      min=proizvod.cena;
    });
    this.proizvodMin=this.proizvodi2.filter((proizvod:Proizvod)=>proizvod.cena===min)[0];
    }else{
      this.proizvodMin=undefined;
    }
  }
  //preuzmi personalizovane kategorije proizvoda
  public preuzmiKategorije():void{
    this.http.get<{[key:number]:Kategorija}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije.json")
    .pipe(map(kategorije=>{
      let kat:Kategorija[]=[];
      for (const key in kategorije) {
        kat.push(new Kategorija(key,kategorije[key].id,kategorije[key].naziv,this.proizvodi.filter(pr=>pr.personalizovano.includes(kategorije[key].id))));
      }
      return kat;
    }))
    .subscribe((data)=>{
      this.kategorije=data;
    });
  }
  //ubaci proizvod u korpu
  public ubaciUKorpu(proizvod:Proizvod,cena:number):void{
    this.korpa.push(new KupljenProizvod(proizvod,cena));
  }
  // izbaci proizvod iz korpe
  public izbaciIzKorpe(proizvod:KupljenProizvod):void{
    this.korpa=this.korpa.filter(pr=>pr!==proizvod);
  }
  public preuzmiPersonalizovaneKategorije(){
    this.personalizovaneKategorije=[];
    this.http.get<{[key: number]:PersonalizovanaKategorija}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano.json")
    .pipe(map((personalizovano)=>{
      let per:PersonalizovanaKategorija[]=[];
        for(const key in personalizovano){
          per.push(new PersonalizovanaKategorija(key,personalizovano[key].id,personalizovano[key].naziv,this.proizvodi.filter(proizvod=>proizvod.personalizovano.includes(personalizovano[key].id))));
        }
        return per;
    }))
    .subscribe((data)=>{
      this.personalizovaneKategorije=data;
    });
  }
  //izmeni proizvod u bazi
  public IzmeniProizvod(proizvod:Proizvod,id:string){
    console.log(proizvod);
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/${id}.json`)
    .subscribe(()=>{console.log("proizvod je izbrisan")},(err)=>{console.log("Proizvod nije izbrisan");console.error(err)}).add(
    this.http.post<{[key:number]:Proizvod}>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi.json`,proizvod)
    .subscribe(()=>{console.log("Uspesno je ucitan proizvod u bazu");},(err)=>{console.log("Desila se greska prilikom ucitavanja proizvoda");console.log(err)}));
    this.proizvodi=this.proizvodi.filter(pr=>pr.key!=proizvod.key);
    this.proizvodi.push(proizvod);
  }
  //obrisi proizvod u bazi
  public obrisiProizvod(proizvod:Proizvod){
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi/${proizvod.key}.json`)
    .subscribe(()=>{console.log("proizvod je izbrisan")},(err)=>{console.log("Proizvod nije izbrisan");console.error(err)});
    this.proizvodi=this.proizvodi.filter(pro=>pro.key!=proizvod.key);
  }
  //dodaj proizvod u bazu
  public dodajProizvod(proizvod:Proizvod){
    this.http.post<{[key:number]:Proizvod}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/proizvodi.json",proizvod)
    .subscribe(()=>{console.log("Proizvod je uspesno unet u bazu")},()=>{console.log("Novi proizvod nije unet u bazu")});
  }
  //izmeni prodavnicu u bazi
  public izmeniProdavnicu(prodavnica:Prodavnica){
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice/${prodavnica.key}.json`)
    .subscribe(()=>{
      this.http.post<Prodavnica>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice.json`,prodavnica)
    .subscribe(()=>{
      this.http.get<{[key:number]:Prodavnica}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice.json").pipe(tap(
      (prodavnice:Prodavnica[])=>{
        for(const key in prodavnice){
          if(prodavnice[key].id==prodavnica.id){
            prodavnica.key=key;
          }
        }
      }
    )).subscribe(()=>{},()=>{})
    },(err)=>{console.log("Desila se greska prilikom ucitavanja prodavnice");console.log(err);})
    },(err)=>{console.log("Prodavnica nije obrisana");console.error(err)});

    this.prodavnice=this.prodavnice.filter(pro=>pro.key!=prodavnica.key);
    this.prodavnice.push(prodavnica);
  }
  //izbrisi prodavnicu
  public izbrisiProdavnicu(prodavnica:Prodavnica){
    this.http.delete(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice/${prodavnica.key}.json`)
    .subscribe(()=>{
      console.log("prodavnica je uspesno izbrisana");
      this.prodavnice=this.prodavnice.filter(pro=>pro.key!=prodavnica.key);
      console.log(this.prodavnice);
      for(let i =0;i<this.proizvodi.length;i++){
        if(this.proizvodi[i].UProdavnici.includes(prodavnica.id)){
          this.proizvodi[i].UProdavnici=this.proizvodi[i].UProdavnici.filter(id=>id!=prodavnica.id);
          this.IzmeniProizvod(this.proizvodi[i],(i+1).toString())
        }      
      }
  });
  }
  //vrati id prodavnice
  public vratiIdProdavnice():number{
    let idProdavnica:number[]=[];
    this.prodavnice.forEach(prodavnica => {
      idProdavnica.push(prodavnica.id);
    });
    for(let i=0;i<this.prodavnice.length;i++){
      if(!idProdavnica.includes(i)){
        return i;
      }
    }
    return this.prodavnice.length;
  }
  //dodaj prodavnicu u bazu
  public dodajProdavnicuUBazu(prodavnica:Prodavnica){
    this.http.post<Prodavnica>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice.json",prodavnica)
    .subscribe(()=>{
      this.http.get<{[key:number]:Prodavnica}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/prodavnice.json")
      .subscribe((prodavnice)=>{
        for(const key in prodavnice){
          if(prodavnice[key].id==prodavnica.id){
            prodavnica.key=key;
          }
        }
      })
    })
    this.prodavnice.push(prodavnica);
  }
  //izmeni kategoriju u bazi
  public izmeniKategoriju(kategorija:Kategorija){
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije/${kategorija.key}.json`)
    .subscribe(()=>{
      console.log("kategorija je uspesno izbrisana");
      this.http.post<Kategorija>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije.json",kategorija)
      .subscribe(()=>{
        console.log("kategorija je uspesno uneta u bazu");
        this.http.get<{[key:number]:Kategorija}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije.json")
        .subscribe((kategorije)=>{
          for(const key in kategorije){
            if(kategorije[key].id=kategorija.id){
              kategorija.key=key;
            }
          }
        })
      })
    });
  }
  //dodaj kategoriju u bazu
  public dodajKatgoriju(kategorija:Kategorija){
    this.http.post<Kategorija>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije.json",kategorija)
    .subscribe(()=>{
      this.http.get<{[key:number]:Kategorija}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije.json")
      .subscribe((kategorije)=>{
        for(const key in kategorije){
          if(kategorije[key].id=kategorija.id){
            kategorija.key=key;
          }
        }
      })
    });
    this.kategorije.push(kategorija);
  }
  //vrati id za kategoriju
  public vratiIdZaKategoriju():number{
    let idKategorija:number[]=[];
    this.kategorije.forEach(kategorija=>{
      idKategorija.push(kategorija.id);
    });
    for(let i=1;i<=idKategorija.length;i++){
      if(!idKategorija.includes(i)){
        return i;
      }
    }
    return idKategorija.length+1;
  }
  //izbrisi kategoriju iz baze
  public izbrisiKategoriju(kategorija:Kategorija){
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/kategorije/${kategorija.key}.json`)
    .subscribe(()=>{
      this.kategorije=this.kategorije.filter(kat=>kat.id!=kategorija.id);
      for(let i=0;i<this.proizvodi.length;i++){
        if(this.proizvodi[i].kategorije.includes(kategorija.id)){
          this.proizvodi[i].kategorije=this.proizvodi[i].kategorije.filter(id=>id!=kategorija.id);
          console.log(this.proizvodi[i]);
          this.IzmeniProizvod(this.proizvodi[i],i.toString());
        }
      }
    });
  }
  //izmeni personalizovanu kategoriju
  public izmeniPersonalizovanuKategoriju(personalizovanaKategorija:PersonalizovanaKategorija){
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano/${personalizovanaKategorija.key}.json`)
    .subscribe(()=>{
      this.http.post<PersonalizovanaKategorija>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano.json",personalizovanaKategorija)
      .subscribe(()=>{
        this.http.get<{[key:number]:PersonalizovanaKategorija}>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano.json")
        .subscribe((personalizovaneKategorije)=>{
          for(const key in personalizovaneKategorije){
            if(personalizovaneKategorije[key].id==personalizovanaKategorija.id){
              personalizovanaKategorija.key=key;
            }
          }
        })
      })
    })
  }
  //vrati ID za personalizovanu kategoriju
  public vratiIdZaPersonalizovanuKategoriju():number{
    let idPerKategorija:number[]=[];
    this.personalizovaneKategorije.forEach(perKat=>{
      idPerKategorija.push(perKat.id);
    });
    console.log("duzina personalizovanih kategorija je "+ idPerKategorija.length);
    console.log(this.personalizovaneKategorije);
    for(let i=1;i<=idPerKategorija.length;i++){
      if(!idPerKategorija.includes(i)){
        return i;
      }
      return idPerKategorija.length+1;
    }
  }
  //dodaj personalizovanu kategoriju u bazu
  public dodajPersonalizovanuKategoriju(perKategorija:PersonalizovanaKategorija){
    this.http.post<PersonalizovanaKategorija>("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano.json",perKategorija)
    .subscribe(()=>{
      this.http.get("https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano.json")
      .subscribe((personalizovaneKat)=>{
        for(const key in personalizovaneKat){
          if(personalizovaneKat[key].id=perKategorija.id){
            perKategorija.key=key;
            this.personalizovaneKategorije.push(perKategorija);
          }
        }
      })
    })
  }
  //izbrisi personalizovanu kategoriju iz baze
  public izbrisiPersonalizovanuKategoriju(perKategorija:PersonalizovanaKategorija){
    this.http.delete<void>(`https://angular-aplikacija2-default-rtdb.europe-west1.firebasedatabase.app/personalizovano/${perKategorija.key}.json`)
    .subscribe(()=>{
      this.personalizovaneKategorije=this.personalizovaneKategorije.filter(kat=>kat.id!=perKategorija.id);
      for(let i=0;i<this.proizvodi.length;i++){
        if(this.proizvodi[i].personalizovano.includes(perKategorija.id)){
          this.proizvodi[i].personalizovano=this.proizvodi[i].personalizovano.filter(id=>id!=perKategorija.id);
          this.IzmeniProizvod(this.proizvodi[i],i.toString());
        }
      };
    });
  }
}
