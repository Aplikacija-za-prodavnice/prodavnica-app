import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/klase/account/account';
import { AccountService } from 'src/app/servisi/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public accountService:AccountService) { }

  private subscription:Subscription;
  public account:Account;
  ngOnInit() {
    this.subscription=this.accountService.user.subscribe((user)=>{if(user!=null){this.account=new Account("","",user.email.toString(),"");}})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
