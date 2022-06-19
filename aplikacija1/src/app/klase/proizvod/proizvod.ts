export class Proizvod {
    public key?:String;
    public naziv?: string=undefined; 
    public kategorije?: number[]=undefined; 
    public personalizovano?: number[]=undefined;
    public cena?: number=0; 
    public UProdavnici?:number[]=undefined;
    public slika?: string=undefined;
    public jedinica?:string=undefined;
    public constructor(key:String, naziv?:string,  kategorije?:number[], personalizovano?:number[], cena?:number,UProdavnici?:number[], slika?:string,jeidnica?: string) {
            this.key=key;
            this.naziv = naziv;
            this.kategorije=kategorije;
            this.personalizovano=personalizovano;
            this.cena=cena;
            this.UProdavnici=UProdavnici;
            this.slika=slika;
            this.jedinica=jeidnica;
    }
}
