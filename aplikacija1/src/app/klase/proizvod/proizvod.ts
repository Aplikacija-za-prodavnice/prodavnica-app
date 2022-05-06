export class Proizvod {
    naziv?: string=undefined; 
    prodavnica?: string=undefined; 
    kategorija?: string=undefined; 
    cena?: number=0; 
    slika?: string=undefined;
    jedinica?:string=undefined;
    public constructor(naziv?:string, prodavnica?: string, kategorija?:string, cena?:number, slika?:string,jeidnica?: string) {
            this.naziv = naziv;
            this.prodavnica = prodavnica;
            this.kategorija=kategorija;
            this.cena=cena;
            this.slika=slika;
            this.jedinica=jeidnica;
    }
}
