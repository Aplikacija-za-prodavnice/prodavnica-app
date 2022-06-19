import { Proizvod } from "../proizvod/proizvod";

export class KupljenProizvod{
    public proizvod:Proizvod;
    public cena:number;
    constructor(proizvod:Proizvod,cena:number){
        this.proizvod=proizvod;
        this.cena=cena;
    }
}