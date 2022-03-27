export class Proizvod { 
    naziv?: string=""; 
    prodavnica?: string=""; 
    kategorija?: string=""; 
    cena?: number=0; 
    slika?: string="";
    jedinica?:string="";
    public constructor(naziv?: "", prodavnica?: "", kategorija?:"", cena?:0, slika?: "",jeidnica?: "") {
            this.naziv = naziv;
            this.prodavnica = prodavnica;
            this.kategorija=kategorija;
            this.cena=cena;
            this.slika=slika;
            this.jedinica=jeidnica;
    }
}