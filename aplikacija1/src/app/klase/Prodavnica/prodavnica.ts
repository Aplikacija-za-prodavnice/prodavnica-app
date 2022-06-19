export class Prodavnica {
    public key:String;
    public id:number;
    public naziv:string="";
    public lokacija:string="";
    public slika:string="";
    constructor(key:String,id:number,naziv:string,lokacija:string,slika:string){
        this.key=key;
        this.id=id;
        this.naziv=naziv;
        this.lokacija=lokacija;
        this.slika=slika;
    }
}
