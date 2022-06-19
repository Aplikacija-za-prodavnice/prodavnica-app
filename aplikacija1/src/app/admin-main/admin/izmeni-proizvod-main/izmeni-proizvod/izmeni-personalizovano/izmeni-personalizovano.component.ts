import { Component, OnInit, ViewChildren } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MarketsAndProductsService } from 'src/app/servisi/MarketsAndProducts/markets-and-products.service';

@Component({
  selector: 'app-izmeni-personalizovano',
  templateUrl: './izmeni-personalizovano.component.html',
  styleUrls: ['./izmeni-personalizovano.component.scss'],
})
export class IzmeniPersonalizovanoComponent implements OnInit {

  constructor(private modalCtrl:ModalController,public marketsAndProductsService:MarketsAndProductsService) { }
  @ViewChildren("per") personalizovano:any;
  private obervable;
  ngAfterViewInit(){
    this.obervable=new Observable(observer=>{
      console.log(this.personalizovano);
      this.personalizovano._results.forEach(personalizCheck => {
       personalizCheck.el.addEventListener("click",(e:any)=>{
        if(!e.target.checked==true){
          this.marketsAndProductsService.proizvodIzmeni.personalizovano.push(+e.target.name);
        }else{
          this.marketsAndProductsService.proizvodIzmeni.personalizovano=this.marketsAndProductsService.proizvodIzmeni.personalizovano.filter(id=>id!=(+e.target.name));
        }
        this.marketsAndProductsService.proizvodIzmeni.personalizovano=this.marketsAndProductsService.proizvodIzmeni.personalizovano.sort();
        observer.next(this.marketsAndProductsService.proizvodIzmeni.personalizovano);
       });
      });
    }).subscribe((data:number[])=>{console.log(data)});
  }
  ngOnInit() {
  }
  public onClose(){
    this.modalCtrl.dismiss();
  }

}
