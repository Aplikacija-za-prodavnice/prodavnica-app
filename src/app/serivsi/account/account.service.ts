import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Account} from "../../Klase/Account";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account:Account=new Account();
  constructor() { }
  public registracija(parametar?:FormGroup){
    this.account.firstName=parametar?.controls[0].value;
    this.account.lastName=parametar?.controls[1].value;
    this.account.email=parametar?.controls[2].value;
    this.account.password=parametar?.controls[3].value;
    console.log(this.account);
  }
  accounts:[Account]=[
    new Account(
    "Stefke",
    "Velja",
    "neko@gmail.com",
    "nekoNesto"
    )];
  public provera(parametar?:FormGroup):boolean{
    for(let i=0;i<this.accounts.length;i++){
      if(this.accounts[i].email===parametar?.value.email&&this.accounts[i].password===parametar?.value.password)
          {
            this.account=this.accounts[i];
            return true;
          }
    }
    return false;
  }
  public provera1(parametar?:FormGroup):boolean{
    for(let i=0;i<this.accounts.length;i++){
      if(this.accounts[i].email===parametar?.value.email&&this.accounts[i].password===parametar?.value.password1)
          {
            return false;
          }
    }
    
    return true;
  }
  public odjava(){
    this.account.firstName="";
    this.account.lastName="";
    this.account.email="";
    this.account.password="";
    console.log(this.account);
  }
}
