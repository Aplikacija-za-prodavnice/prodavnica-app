import { Component, OnInit, ViewChildren } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-kategorije',
  templateUrl: './izmeni-kategorije.component.html',
  styleUrls: ['./izmeni-kategorije.component.scss'],
})
export class IzmeniKategorijeComponent implements OnInit {

  constructor(private modalCtrl:ModalController,public marketsAndProductsService:MarketsAndProductsService) { }
  @ViewChildren("kat") kategorije:any;
  private observable;
  ngAfterViewInit(){
    this.observable=new Observable(observer=>{
      this.kategorije._results.forEach(kategCheck => {
        kategCheck.el.addEventListener("click",(e)=>{
          if(!e.target.checked==true){
            this.marketsAndProductsService.proizvodIzmeni.kategorije.push(+e.target.name);
          }else{
            this.marketsAndProductsService.proizvodIzmeni.kategorije=this.marketsAndProductsService.proizvodIzmeni.kategorije.filter(id=>id!=(+e.target.name));
          }
          this.marketsAndProductsService.proizvodIzmeni.kategorije=this.marketsAndProductsService.proizvodIzmeni.kategorije.sort();
          observer.next(this.marketsAndProductsService.proizvodIzmeni.kategorije);
        })
      });
    }).subscribe();
  }
  ngOnInit() {}

  public onClose(){
    this.observable.unsubscribe();
    this.modalCtrl.dismiss();
  }
}
