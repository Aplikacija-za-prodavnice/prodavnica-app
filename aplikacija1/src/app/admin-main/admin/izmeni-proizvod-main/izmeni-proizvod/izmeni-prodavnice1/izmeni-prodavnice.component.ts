import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-prodavnice',
  templateUrl: './izmeni-prodavnice.component.html',
  styleUrls: ['./izmeni-prodavnice.component.scss'],
})
export class IzmeniProdavniceComponent implements OnInit {

  constructor(public marketsAndProductsService:MarketsAndProductsService,private modalCtrl:ModalController,private activatedRoute:ActivatedRoute) { }
  private observable:any;
  private niz:number[]=[];
  @ViewChildren("prodavnice") prodavnice:any;

  ngAfterViewInit(){
    this.observable= new Observable(observer=>{
      this.prodavnice._results.forEach((prodavnicaCheck:any) => {
        if(prodavnicaCheck.checked){
          this.niz.push(+prodavnicaCheck.el.name);
        }
        prodavnicaCheck.el.addEventListener("click",(e:any)=>{
          if(!e.target.checked==true){
            this.marketsAndProductsService.proizvodIzmeni.UProdavnici.push(e.target.name);
            this.niz.push(e.target.name);
          }else{
            this.marketsAndProductsService.proizvodIzmeni.UProdavnici=this.marketsAndProductsService.proizvodIzmeni.UProdavnici.filter(id=>id!=(e.target.name));
            this.niz=this.niz.filter(id=>id!=(e.target.name));
          }
          this.marketsAndProductsService.proizvodIzmeni.UProdavnici=this.marketsAndProductsService.proizvodIzmeni.UProdavnici.sort();
          observer.next(this.marketsAndProductsService.proizvodIzmeni.UProdavnici);
        });
      })
    }).subscribe((data:number[])=>{
      console.log(data);
    });
  }
  ngOnInit() {
  }
  public onClose(){
    this.modalCtrl.dismiss();
  }
  ngOnDestroy(){
    this.observable.unsubscribe();
  }

}
