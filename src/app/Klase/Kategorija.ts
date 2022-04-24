import { Proizvod } from "./Proizvod";

export class Kategorija{
    public naziv:string="";
    public proizvodi:Array<Proizvod>=[];
    constructor(naziv:string,proizvodi:Array<Proizvod>){
        this.naziv=naziv;
        this.proizvodi=proizvodi;
    }
}